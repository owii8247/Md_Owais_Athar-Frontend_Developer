import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCapsule } from '../Redux/action';

const CapsuleData = () => {
    const capsules = useSelector((state) => state.AppReducer.capsules)
    const [status, setStatus] = useState('');
    const [originalLaunch, setOriginalLaunch] = useState('');
    const [type, setType] = useState('');
    const [showPopup, setShowPopup] = useState(false)
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
    console.log("filter", filteredCapsules)
    return (
        <>

            {/* ------SEARCH-------- */}
            <div className="flex flex-col md:flex-row sm:flex-col p-10 gap-5">
                <div className="md:w-1/2 sm:w-full mb-2">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="status">
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
                    </select>
                </div>
                <div className="md:w-1/2 sm:w-full mb-2">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="original_launch">
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
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="type">
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

            
        </>
    )
}

export default CapsuleData