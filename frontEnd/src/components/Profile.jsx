import React from 'react'
import { useState } from 'react'
import Post from './Post'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import axios from 'axios'
import 'youtube-video-js'
import { YoutubeVideoElement } from 'youtube-video-js'

export const Profile = (props) => {
    const [video, setVideo] = useState(true)
    useEffect(() => {
        console.log("channel id =", props.channelId)
        let chID=props.channelId
        axios.get(`http://localhost:5001/auth/channelVideos/${chID}`).then((response)=>{
            console.log("profile element useEffect :",response)
        })
        console.log(props.videos)
    },[])
    return (
        <motion.div >
            <div className='w-screen bg-slate-300'>
                <main className="profile-page">
                    <section className="relative block" style={{ height: "500px" }}>
                        <div
                            className="w-full blur-sm h-full bg-center bg-cover"
                            style={{
                                blue: '',
                                backgroundImage:
                                    "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",

                            }}
                        >
                            <span
                                id="blackOverlay"
                                className=" h-full absolute  "
                            ></span>
                        </div>
                        <div
                            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                            style={{ height: "70px" }}
                        >
                            <svg
                                className="absolute bottom-0 overflow-hidden"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 2560 100"
                                x="0"
                                y="0"
                            >
                                <polygon
                                    className="text-gray-300 fill-current"
                                    points="2560 0 2560 100 0 100"
                                ></polygon>
                            </svg>
                        </div>
                    </section>
                    <section className="relative py-2 bg-gray-300">
                        <div className="container mx-auto px-4">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                                <div className="px-6">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                            <div className="relative">
                                                {/* <img
                        alt="..."
                        src=''
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                        style={{ maxWidth: "150px" }}
                      /> */}
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                            <div className="py-6 px-3 mt-32 sm:mt-0">
                                                <button
                                                    className="bg-blue-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                                                    type="button"
                                                    style={{ transition: "all .15s ease" }}
                                                >
                                                    Connect
                                                </button>
                                                <button
                                                    className="bg-blue-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                                                    type="button"
                                                    style={{ transition: "all .15s ease" }}
                                                >
                                                    Collaborate
                                                </button>
                                                <button
                                                    className="bg-blue-500 active:bg-pink-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                                                    type="button"
                                                    style={{ transition: "all .15s ease" }}
                                                >
                                                    Promote
                                                </button>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                            <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                                <div className="mr-4 p-3 text-center">
                                                    <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                                                        {props.subscribers}
                                                    </span>
                                                    <span className="text-sm text-gray-500">Subscribers</span>
                                                </div>

                                                <div className="mr-4 p-3 text-center">
                                                    <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                                                        10
                                                    </span>
                                                    <span className="text-sm text-gray-500">Videos</span>
                                                </div>
                                                <div className="lg:mr-4 p-3 text-center">
                                                    <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                                                        89
                                                    </span>
                                                    <span className="text-sm text-gray-500">Total Comments</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' flex justify-center'>

                                        <img src={props.dp} className='w-60 hover:scale-105 duration-700 rounded-full ' alt="" />
                                    </div>
                                    <div className=" mt-12">
                                        <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                                            {props.title}
                                        </h3>
                                        {/* <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                                            <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}

                                        </div>
                                        <div className="mb-2 text-gray-700 mt-10">
                                            <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>

                                        </div>
                                        <div className="mb-2 text-gray-700">
                                            <i className="fas fa-university mr-2 text-lg text-gray-500"></i>

                                        </div> */}
                                    </div>
                                    <div className="mt-10 py-10 border-t border-gray-300 text-center">
                                        <div className="flex flex-wrap justify-center">
                                            <div className="w-full overflow-y-scroll lg:w-9/12 px-4">
                                                <p className="mb-4 text-lg leading-relaxed text-gray-800">
                                                    {props.description}
                                                </p>
                                                <a
                                                    href="#pablo"
                                                    className="font-normal text-pink-500"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    {/* Show more */}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>

            <div className='w-screen h-fit grid grid-cols-2 flex mx-2 gap-4 px-3 justify-center bg-slate-300'>
                <div className='bg-slate-100 border border-8 border-slate-100 rounded-xl shadow shadow-slate-500 shadow-md overflow-y-scroll  container mb-20' style={{ height: "50%" }}>
                    <div className='grid grid-cols-1 '>
                        <button className='p-1 bg-blue-200 hover:bg-blue-400 m-3 rounded-xl' >Videos</button>
                        {/* <button className='p-1 bg-blue-200 hover:bg-blue-400 m-3 rounded-xl' onClick={() => setVideo(!video)}>Posts</button> */}



                    </div>
                    {video ?
                     <div className=''>
                        <div className='flex grid grid:duration-500 md:grid-cols-1 md:duration-500 ld:grid-cols-2 lg:duration-500  sm:grid-cols-1 sm:duration-500 justify-center mx-auto sm:gap-4 p-8 container'>
                            {props.videos.slice(0, 10).map((video) => {
                                return (
                                    <div className='mx-auto '>
                                        <div className=' rounded-xl p-3 shadow-md shadow shadow-slate-500 shadow-md overflow-hidden'>

                                        <youtube-video className="" 
                                            width="640"
                                            height="360" 
                                            src={`https://www.youtube.com/watch?v=${video.id.videoId}`} controls />
                                        </div>

                                    </div>

                                )
                            })}
                        </div>
                    </div> : <div className='overflow-y-scroll'><Post title={props.title} userid={props.userid} dp={props.dp} /></div>}
                </div>
               

            </div>

        </motion.div>
    )
}
