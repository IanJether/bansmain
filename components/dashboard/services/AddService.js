'use client'

import { useRouter } from "next/navigation";
import MainDash from "../common/MainDash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { handlePostServices } from "@/db/services/postServices";
import { EditorState, convertToRaw } from "draft-js";
import { AllContext } from "@/states/context";
import draftToHtml from "draftjs-to-html";
import dynamic from "next/dynamic";


const Editor = dynamic(
    ()=> import('react-draft-wysiwyg').then(mod => mod.Editor),{ssr:false } 
)

function AddServiceDash() {

    const { globalLoading, setGlobalLoading, resetValues, setResetValues, triggerNotification } = useContext(AllContext);

    const [imgprev, setImgprev] = useState("");
    const [file, setFile] = useState("none");
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [showEditor, setShowEditor] = useState(false)

    const router = useRouter();

    const fileChange = (event) => {

        const inp = document.getElementById("imageinput");

        const [file] = inp.files

        setFile(event.target.files[0])
        setImgprev(URL.createObjectURL(file))

    }

    const handleSubmit = () => {

        handlePostServices(file, title, description, draftToHtml(convertToRaw(editorState.getCurrentContent())), setGlobalLoading, setResetValues, resetValues, triggerNotification)
    }

    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const onEditorStateChange = (editorStatee) => {
        setEditorState(editorStatee);
      
    };

    useEffect(() => {

        setTitle("")
        setDescription('')
        setImgprev('')
        setFile('none')

    }, [resetValues])


    useEffect(() => {

        setShowEditor(true)

    }, [])

    return (
        <MainDash>
            <div className='AddServiceDash relative'>

                <p onClick={() => router.back()} className="text-primary hover:text-sec2 hover:underline cursor-pointer absolute top-[-18px]">
                    <span className="mr-[6px]"><FontAwesomeIcon icon={faAngleLeft} /></span>
                    Back
                </p>

                <div className="flex justify-between items-center">
                    <h2 className="text-[24px] w-[200px] font-semibold text-primary">  Add Service</h2>


                    <button onClick={() => handleSubmit()} className="button1 w-[200px]">Submit</button>
                </div>

                <div className=" h-[78vh] border-b-[1px] bg-white shadow-sm  p-[30px] w-full rr mt-[25px] overflow-scroll no-scrollbar">

                    <div className="flex flex-col gap-[5px]">
                        <label className="font-semibold text-neutral-600" htmlFor="">Image</label>
                        <div className="flex gap-[50px]">

                            <div className="overflow-hidden flex items-center justify-center h-[200px] w-[32%] bg-gray-100 rr">
                                {imgprev !== "" ?
                                    <Image className="h-full w-full object-contain" height={200} width={200} src={imgprev} alt="" /> :
                                    <Image className=" h-[50px]" height={300} width={300} src="/images/noImage.svg" alt="" />}
                            </div>
                            <div className="text-[24px] cursor-pointer bg-white text-neutral-700 border-2 border-neutral-400 rounded-[5px] h-[50px] w-[50px] font-light mb-[10px] flex items-center justify-center">
                                <input id="imageinput" onChange={fileChange} className="hidden" type="file" accept="image/jpeg, image/png, image/jpg" name="imageinput" />
                                <label htmlFor="imageinput">
                                    {file !== "none" ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faPlus} />}
                                </label>

                            </div>
                        </div>

                    </div>

                    <div className="flex justify-between gap-[25px] mt-[25px]">
                        <div className="flex flex-col w-full">
                            <label className="font-semibold text-neutral-600" htmlFor="">Title</label>
                            <input value={title} onChange={(e) => setTitle(e.target.value)} className="inputContact" type="text" />
                            <p className="mt-[3px] text-red-500 text-[13px]">*6 words max</p>

                        </div>
                        <div className="flex flex-col w-full">
                            {/* <label className="font-semibold text-neutral-600" htmlFor="">Author</label>
                            <input className="inputContact" type="text" /> */}

                        </div>
                        <div className="flex flex-col w-full">
                            {/* <label className="font-semibold text-neutral-600" htmlFor="">Email</label>
                            <input value="ben@bansprotection.co.ke" className="inputContact" type="text" /> */}

                        </div>
                    </div>
                    <div className="flex justify-between gap-[25px] mt-[25px]">
                        <div className="flex flex-col w-full">
                            <label className="font-semibold text-neutral-600" htmlFor="">Description</label>
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="bg-gray-100 rr h-[] mt-[10px] p-[10px] h-[200px] outline-none border-sec focus:border hover:border" type="text" />
                            <p className="mt-[3px] text-red-500 text-[13px]">*10 words max</p>

                        </div>
                        <div className="flex flex-col w-full">
                            {/* <label className="font-semibold text-neutral-600" htmlFor="">Author</label>
                            <input className="inputContact" type="text" /> */}

                        </div>
                        <div className="flex flex-col w-full">
                            {/* <label className="font-semibold text-neutral-600" htmlFor="">Email</label>
                            <input value="ben@bansprotection.co.ke" className="inputContact" type="text" /> */}

                        </div>
                    </div>

                    <div className="mt-[40px] mb-[100px] w-[70%]">

                        <label className="font-semibold text-neutral-600" htmlFor="">Blog</label>


                        {showEditor ?
                            <Editor
                                editorState={editorState}
                                toolbarClassName="toolbarClassName no-scrollbar border border-blu"
                                wrapperClassName="wrapperClassName no-scrollbar h-[650px]  mt-[10px]"
                                editorClassName="editorClassName no-scrollbar border border-nuetral-700 p-[10px]"
                                onEditorStateChange={onEditorStateChange}
                            />
                            :
                            null
                        }



                    </div>

                </div>

            </div>
        </MainDash>
    );
}

export default AddServiceDash;