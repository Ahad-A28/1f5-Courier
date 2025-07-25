import React, { useState, useEffect, useContext } from 'react';
import { getFirestore, collection, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import AddTrackingModal from './AddTrackingModal';
import Theme from '../../Contexts/Theme';
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import * as XLSX from 'xlsx';
import UpdateTracking from './UpdateTracking';
import { toast, ToastContainer } from 'react-toastify';
import Loading from '../Loading';
import Loading2 from '../Loading2';

const Tracking = () => {
  const [loading, setLoading] = useState(true);
  const [trackingData, setTrackingData] = useState([]);
  const [filteredData, setFilteredData] = useState([]); // For filtered results
  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const navigate = useNavigate();
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [isDarkMode] = useContext(Theme);
  const [trackingToUpdate, setTrackingToUpdate] = useState(null);

  // Fetch tracking data when the component mounts
  useEffect(() => {
    fetchTrackingData();
  }, []);

  const fetchTrackingData = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, 'trackingData'));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTrackingData(data);
      setFilteredData(data); // Initialize filtered data
    } catch (error) {
      console.error('Error fetching tracking data: ', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value.toUpperCase();
    setSearchQuery(query);

    // Filter the tracking data based on the search query
    const filtered = trackingData.filter((item) =>
      item.trackingNumber.toUpperCase().includes(query)
    );
    setFilteredData(filtered);
  };

  const updateStatus = async (id, status, currentLocation) => {
    try {
      const trackingRef = doc(db, 'trackingData', id);
      await updateDoc(trackingRef, { status, currentLocation });
      fetchTrackingData(); // Refresh the data
    } catch (error) {
      console.error('Error updating status: ', error);
    }
  };

  const deleteTracking = async (id) => {
    try {
      const trackingRef = doc(db, 'trackingData', id);
      await deleteDoc(trackingRef);
      toast.error('Tracking data deleted successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      fetchTrackingData();
    } catch (error) {
      console.error('Error deleting tracking data: ', error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  const handleEdit = (tracking) => {
    setShowUpdateModal(true);
    setTrackingToUpdate({
      ...tracking,
      id: tracking.id // Ensure ID is explicitly set
    });
  };

  const exportToExcel = () => {
    const exportData = trackingData.map(({ id, ...item }) => ({
      'Tracking Number': item.trackingNumber,
      'Customer Name': item.customerName,
      'Items': item.Items,
      'Status': item.status,
      'Destination': item.destination,
      'Current Location': item.currentLocation,
      'Estimated Delivery': item.estimatedDelivery
    }));

    const ws = XLSX.utils.json_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Tracking Data");
    XLSX.writeFile(wb, `Tracking_Data_${new Date().toLocaleDateString()}.xlsx`);
  };

  return (
    <>
      <ToastContainer />
      <div className={`p-5 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-[#F4F7FF] text-gray-900'} `}>
        <div className="flex flex-wrap mb-4">
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-2 sm:mb-0"
          >
            + Add New Tracking
          </button>

          <button
            onClick={exportToExcel}
            disabled={loading || trackingData.length === 0}
            className={`px-4 py-2 rounded ml-4 mb-2 sm:mb-0 text-white
              ${loading || trackingData.length === 0
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-green-500 hover:bg-green-600'
              }`}
          >
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Export To Excel
            </span>
          </button>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-4 mb-2 sm:mb-0"
          >
            Log Out
          </button>
        </div>

        {/* Search Input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by Tracking Number"
            value={searchQuery}
            onChange={handleSearch}
            className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mt-6 overflow-auto h-screen rounded-lg">
          <table className={`w-full  bg-white shadow rounded ${isDarkMode && 'text-gray-900'}  `}>
            <thead>
              <tr className="border-b">
                <th className="py-4 px-2 text-center border-r ">Third Party Name </th>
                <th className="py-4 px-2 text-center border-r ">Third Party Tr </th>
                <th className="py-4 px-2 text-center border-r ">Tracking Number</th>
                <th className="py-4 px-2 text-center border-r ">Customer</th>
                <th className="py-4 px-2 text-center border-r ">Items</th>
                <th className="py-4 px-2 text-center border-r ">Status</th>
                <th className="py-4 px-2 text-center border-r ">Destination</th>
                <th className="py-4 px-2 text-center border-r ">CurrentLocation</th>
                <th className="py-4 px-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="9" className="py-4 px-2 text-center">
                  <Loading2/>
                  </td>
                </tr>
              ) : filteredData.length === 0 ? (
                <tr>
                  <td colSpan="9" className="py-4 px-2 text-center">
                    No tracking data available.
                  </td>
                </tr>
              ) : (
                filteredData.map((tracking) => (
                  <tr key={tracking.id} className="border-b">
                    <td className="py-4 px-2 border-r uppercase ">{tracking.ThirdPartyName}</td>
                    <td className="py-4 px-2 border-r uppercase">{tracking.ThirdPartyTr}</td>
                    <td className="py-4 px-2 border-r uppercase">{tracking.trackingNumber}</td>
                    <td className="py-4 px-2 border-r ">{tracking.customerName}</td>
                    <td className="py-4 px-2 border-r ">{tracking.Items}</td>
                    <td
                      className={`py-4 px-2 border-r ${
                        tracking.status === "Delivered" || tracking.status === "Shipment Created"
                          ? "text-green-500"
                          : tracking.status === "Out Of Delivery" || tracking.status === "In Transit" || tracking.status === "Dispatch"
                          ? "text-yellow-400"
                          : tracking.status === "Slightly Delay"
                          ? "text-yellow-600"
                          : tracking.status === "On Hold"
                          ? "text-yellow-600"
                          : "text-red-500"
                      }`}
                    >
                      {tracking.status}
                    </td>
                    <td className="py-4 px-2 border-r ">{tracking.destination}</td>
                    <td className="py-4 px-2 border-r ">{tracking.currentLocation}</td>
                    <td className="py-4 px-2 border-r-2 flex flex-col sm:flex-row sm:items-center">
                      <select
                        value={tracking.status}
                        onChange={(e) => updateStatus(tracking.id, e.target.value, tracking.currentLocation)}
                        className="border rounded p-1 mb-2 sm:mb-0 sm:mr-2"
                      >
                        <option value="Shipment Created">Shipment Created</option>
                        <option value="Out Of Delivery">Out Of Delivery</option>
                        <option value="In Transit">In Transit</option>
                        <option value="Dispatch">Dispatch</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Slightly Delay">Slightly Delay</option>
                        <option value="On Hold">On Hold</option>
                        <option value="Failed">Failed</option>
                      </select>
                <div className="btn flex flex-wrap justify-center items-center gap-3">
                <button
                        onClick={() => deleteTracking(tracking.id)}
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => handleEdit(tracking)}
                        className="bg-blue-500   text-white px-2 py-1 rounded hover:bg-blue-600 "
                      >
                        Update
                      </button>

                </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modals */}
      {showUpdateModal && (
        <UpdateTracking
          isOpen={showUpdateModal}
          onClose={() => setShowUpdateModal(false)}
          trackingData={trackingToUpdate}
          fetchData={fetchTrackingData}
        />
      )}

      {showAddModal && (
        <AddTrackingModal
          onClose={() => {
            setShowAddModal(false);
            fetchTrackingData(); // Refresh data after adding a new tracking record
          }}
        />
      )}
    </>
  );
};

export default Tracking;