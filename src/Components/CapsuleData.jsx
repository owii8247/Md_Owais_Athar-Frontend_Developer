import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCapsule } from '../Redux/action';
import Pagination from './Pagination';


const CapsuleData = () => {
    const capsules = useSelector((state) => state.AppReducer.capsules)
    const [status, setStatus] = useState('');
    const [originalLaunch, setOriginalLaunch] = useState('');
    const [type, setType] = useState('');
    const [showPopup, setShowPopup] = useState(false)
    const [page, setPage] = useState(1)
    const dispatch = useDispatch()
    //console.log("cap", capsules)
    useEffect(() => {

        dispatch(getCapsule(status, originalLaunch, type))
    }, [dispatch, status, originalLaunch, type]);



    const filteredCapsules = capsules.filter(capsule => {
        return (
            (status === '' || capsule.status === status) &&
            (originalLaunch === '' || capsule.original_launch === originalLaunch) &&
            (type === '' || capsule.type === type)
        );
    });
    //console.log("filter", filteredCapsules)



    const perPage = 10;
    const totalPages = Math.ceil(filteredCapsules.length / perPage);
    let end = page * perPage;
    let start = end - perPage;
    let pagination = filteredCapsules.slice(start, end)

    return (
        <>

            {/* ------SEARCH-------- */}
            <div className="flex flex-col md:flex-row sm:flex-col p-10 gap-5 dark:bg-gray-900">
                <div className="md:w-1/2 sm:w-full mb-2">
                    <label className="block text-blue-300 font-medium mb-2" htmlFor="status">
                        Status
                    </label>
                    <select
                        className="block w-full rounded-lg bg-white border border-gray-400 py-2 px-3 leading-tight focus:outline-none focus:border-indigo-500"
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="active">Active</option>
                        <option value="retired">Retired</option>
                        <option value="unknown">Unknown</option>
                        <option value="destroyed">Destroyed</option>
                    </select>
                </div>
                <div className="md:w-1/2 sm:w-full mb-2">
                    <label className="block text-blue-300 font-medium mb-2" htmlFor="original_launch">
                        Original Launch
                    </label>
                    <input
                        className="block w-full rounded-lg bg-white border border-gray-400 py-2 px-3 leading-tight focus:outline-none focus:border-indigo-500"
                        type="date"
                        id="original_launch"
                        value={originalLaunch}
                        onChange={(e) => setOriginalLaunch(e.target.value)}
                    />
                </div>
                <div className="md:w-1/2 sm:w-full">
                    <label className="block text-blue-300 font-medium mb-2" htmlFor="type">
                        Type
                    </label>
                    <select
                        className="block w-full rounded-lg bg-white border border-gray-400 py-2 px-3 leading-tight focus:outline-none focus:border-indigo-500"
                        id="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="Dragon 1.0">Dragon 1.0</option>
                        <option value="Dragon 1.1">Dragon 1.1</option>
                        <option value="Dragon 2.0">Dragon 2.0</option>
                    </select>
                </div>
            </div>

            {/* ------DATA MAPING-------- */}
            <div className="flex flex-wrap p-10 dark:bg-gray-900">
                {pagination.map((item) => {
                    return (
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-3 border border-gray-500 rounded-lg p-5 bg-gray-700" key={item.capsule_serial}>
                            <div className="p-5 text-left w-full">
                                <h4 className='text-xl font-bold '>Serial : <span className='text-blue-300'>{item.capsule_serial}</span></h4>
                                <h4 className='text-xl font-bold '>Type : <span className='text-blue-300'>{item.type}</span></h4>
                                <h4 className='text-xl font-bold '>Launch : <span className='text-blue-300'>{item.original_launch}</span></h4>
                                <h4 className='text-xl font-bold '>Status : <span className='text-blue-300'>{item.status}</span></h4>
                            </div>
                            <div className="relative">
                                <div className="border border-gray-500 mt-5 text-xl text-blue-300 font-bold dark:bg-gray-900 cursor-pointer rounded-lg" onClick={() => setShowPopup(true)}>
                                    View Details
                                </div>
                                {showPopup && (
                                    <div className="fixed inset-0 flex items-center justify-center p-4 bg-blur-md">
                                        <div className="bg-gray-700 p-4 rounded">
                                            <button className="text-blue-500 float-right mb-10" onClick={() => setShowPopup(false)}>
                                                Close
                                            </button>
                                            <div className="p-5 text-left w-80">
                                                <h4 className='text-xl font-bold '>Serial : <span className='text-blue-300'>{item.capsule_serial}</span></h4>
                                                <h4 className='text-xl font-bold '>Capsule ID : <span className='text-blue-300'>{item.capsule_id}</span></h4>
                                                <h4 className='text-xl font-bold '>Status : <span className='text-blue-300'>{item.status}</span></h4>
                                                <h4 className='text-xl font-bold '>Mission Name : <span className='text-blue-500'>{ }</span></h4>
                                                <h4 className='text-xl font-bold '>Landings : <span className='text-blue-300'>{item.landings}</span></h4>
                                                <h4 className='text-xl font-bold '>Type : <span className='text-blue-300'>{item.type}</span> </h4>
                                                <h4 className='text-xl font-bold '>Details : <span className='text-blue-300 '>{item.details}</span></h4>

                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )
                })}

            </div>
            <div className='dark:bg-gray-900 p-10'>
                <Pagination current={page} total={totalPages} onChange={setPage} />
            </div>
            

        </>
    )
}

export default CapsuleData