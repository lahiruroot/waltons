import React, { useState } from 'react';

const PropertySearch = () => {
    const [formData, setFormData] = useState({
        iCategory: 'all',
        iDistrict: '',
        iCity: '',
        vSearch: 'ELINOR BATTARAMULLA',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <section>
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center">
                <form
                    id="divland"
                    name="divland"
                    action="https://www.primelands.lk/land/search/en"
                    method="POST"
                    className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-lg"
                    onSubmit={handleSubmit}
                >
                    <div className="mb-6 text-center">
                        <h1 className="text-3xl font-bold text-blue-700">
                            Find your dream <b>Property</b>
                        </h1>
                    </div>
                    <div className="flex flex-wrap -mx-2 mb-4">
                        <div className="w-full flex flex-wrap justify-between px-2 mb-4 lg:mb-0 space-x-2">
                            <div className="w-full lg:flex-1 px-2 mb-4 lg:mb-0">
                                <div className="form-group">
                                    <label className="block mb-2 text-gray-700">Looking For</label>
                                    <select
                                        className="form-control w-full p-2 border rounded bg-gray-200 text-gray-700"
                                        id="iCategory"
                                        name="iCategory"
                                        value={formData.iCategory}
                                        onChange={handleChange}
                                    >
                                        <option value="all">All</option>
                                        <option value="1">Lands</option>
                                        <option value="4">Agriculture Land</option>
                                        <option value="11">Close to Airport</option>
                                        <option value="10">Close to highways</option>
                                        <option value="12">Close to railway stations</option>
                                        <option value="9">Close to sacred / ancient city lands</option>
                                        <option value="2">Coconut Land</option>
                                        <option value="14">Commercial</option>
                                        <option value="8">Down south lands</option>
                                        <option value="6">Mountain view</option>
                                        <option value="5">Paddy field facing lands</option>
                                        <option value="13">Residential</option>
                                        <option value="7">Up country lands</option>
                                        <option value="3">Water Front Land</option>
                                    </select>
                                </div>
                            </div>
                            <div className="w-full lg:flex-1 px-2 mb-4 lg:mb-0">
                                <div className="form-group">
                                    <label className="block mb-2 text-gray-700">Districts</label>
                                    <select
                                        name="iDistrict"
                                        id="iDistrict"
                                        className="form-control w-full p-2 border rounded bg-gray-200 text-gray-700"
                                        value={formData.iDistrict}
                                        onChange={handleChange}
                                    >
                                        <option value="" selected>All Districts</option>
                                        <option value="20">Anuradhapura</option>
                                        <option value="1">Colombo</option>
                                        <option value="7">Galle</option>
                                        <option value="2">Gampaha</option>
                                        <option value="9">Hambantota</option>
                                        <option value="3">Kalutara</option>
                                        <option value="4">Kandy</option>
                                        <option value="25">Kegalle</option>
                                        <option value="18">Kurunegala</option>
                                        <option value="5">Matale</option>
                                        <option value="8">Matara</option>
                                        <option value="6">Nuwara Eliya</option>
                                        <option value="24">Ratnapura</option>
                                    </select>
                                </div>
                            </div>
                            <div className="w-full lg:flex-1 px-2 mb-4 lg:mb-0">
                                <div className="form-group">
                                    <label className="block mb-2 text-gray-700">Popular Cities</label>
                                    <select
                                        name="iCity"
                                        id="iCity"
                                        className="form-control w-full p-2 border rounded bg-gray-200 text-gray-700"
                                        value={formData.iCity}
                                        onChange={handleChange}
                                    >
                                        <option value="" selected>All Cities</option>
                                        <option value="1164">Artigala</option>
                                        <option value="1172">Athurugiriya</option>
                                        <option value="1199">Battaramulla</option>
                                        <option value="1193">Boralesgamuwa</option>
                                        <option value="297">Homagama</option>
                                        <option value="302">Kaduwela</option>
                                        <option value="1177">Kahathuduwa</option>
                                        <option value="1179">Kottawa</option>
                                        <option value="1165">Malabe</option>
                                        <option value="1181">Meegoda</option>
                                        <option value="307">Moratuwa</option>
                                        <option value="1159">Piliyandala</option>
                                        <option value="1170">Thalawathugoda</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-2 mb-4">
                        <div className="w-full lg:w-2/3 px-2 mb-4 lg:mb-0">
                            <div className="form-group">
                                <label className="block mb-2 text-gray-700">Search</label>
                                <input
                                    type="text"
                                    list="browsers"
                                    className="form-control w-full p-2 border rounded bg-gray-200 text-gray-700"
                                    id="vSearch"
                                    placeholder="Type here..."
                                    name="vSearch"
                                    value={formData.vSearch}
                                    onChange={handleChange}
                                />
                                <datalist id="browsers">
                                    <option value="ELINOR BATTARAMULLA"></option>
                                    <option value="ARTIGALA"></option>
                                    <option value="ATHURUGIRIYA"></option>
                                    <option value="BATTARAMULLA"></option>
                                    <option value="BORALESGAMUWA"></option>
                                    <option value="HOMAGAMA"></option>
                                    <option value="KADUWELA"></option>
                                    <option value="KAHATHUDUWA"></option>
                                    <option value="KOTTAWA"></option>
                                    <option value="MALABE"></option>
                                    <option value="MEEGODA"></option>
                                    <option value="MORATUWA"></option>
                                    <option value="PILIYANDALA"></option>
                                    <option value="THALAWATHUGODA"></option>
                                </datalist>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 px-2">
                            <label className="block mb-2 invisible">&nbsp;</label>
                            <button
                                type="submit"
                                id="btnid"
                                className="btn btn-default custom_btn w-full bg-blue-500 text-white p-2 rounded"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>    
    );
};

export default PropertySearch;
