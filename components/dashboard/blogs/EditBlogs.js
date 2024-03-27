


'use client'


import MainDash from "../common/MainDash";
import { useParams, useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";
// import { Editor } from "react-draft-wysiwyg";
import { useContext, useEffect, useState } from "react";
import { ContentState, EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import Image from "next/image";
import { AllContext } from "@/states/context";
import { handlePostBlogs } from "@/db/blogs/postBlogs";
import dynamic from "next/dynamic";
import getSingleBlog from "@/db/blogs/fetchOneBlog";
import LoaderComp from "../../Loader";
import htmlToDraft from "html-to-draftjs";
import { handleUpdateBlog } from "@/db/blogs/updateBlogs";



const Editor = dynamic(
    () => import('react-draft-wysiwyg').then(mod => mod.Editor), { ssr: false }
)


function EditBlogsComp() {

    const router = useRouter();

    const params = useParams();

    const { isLoading, singleBlogData } = getSingleBlog(params.blogDashTitle);

    const { globalLoading, setGlobalLoading, resetValues, setResetValues, triggerNotification } = useContext(AllContext);

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [description, setDescription] = useState("")
    const [showEditor, setShowEditor] = useState(false)


    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const onEditorStateChange = (editorStatee) => {
        setEditorState(editorStatee);

    };




    const handleSubmit = () => {
        handleUpdateBlog(title, author, description, draftToHtml(convertToRaw(editorState.getCurrentContent())), setGlobalLoading, setResetValues, resetValues, router, params.blogDashTitle, triggerNotification)
    }

    useEffect(() => {

        setTitle("")
        setAuthor("")
        setDescription('')


    }, [resetValues])



    useEffect(() => {
        if (singleBlogData) {
            const blocksFromHtml = htmlToDraft(singleBlogData.blog);
            if (blocksFromHtml) {
                const { contentBlocks, entityMap } = blocksFromHtml;
                const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
                const editorState = EditorState.createWithContent(contentState);

                setTitle(singleBlogData.title);
                setAuthor(singleBlogData.author);
                setDescription(singleBlogData.description);
                setEditorState(editorState);
            }
        }
    }, [isLoading, singleBlogData]);




    return (
        <MainDash>
            <div className='Addblog relative'>

                <p onClick={() => router.back()} className="text-primary hover:text-sec2 hover:underline cursor-pointer absolute top-[-18px]">
                    <span className="mr-[6px]"><FontAwesomeIcon icon={faAngleLeft} /></span>
                    Back
                </p>

                <div className="flex justify-between items-center">
                    <h2 className="text-[24px] w-[200px] font-semibold text-primary"> Edit Blog</h2>


                    <button onClick={() => handleSubmit()} className="button1 w-[200px]">Submit</button>
                </div>

                {isLoading ?
                    <LoaderComp />
                    :
                    <div className=" h-[78vh] border-b-[1px] bg-white shadow-sm  p-[30px] w-full rr mt-[25px] overflow-scroll no-scrollbar">

                        <div className="flex flex-col gap-[5px]">
                            <label className="font-semibold text-neutral-600" htmlFor="">Image</label>
                            <div className="flex gap-[50px] w-[32%] h-[300px] rr overflow-hidden">

                                <Image className="h-full w-full object-cover" height={500} width={500} src={singleBlogData.imageURL} alt="" />
                            </div>

                        </div>

                        <div className="flex justify-between gap-[25px] mt-[25px]">
                            <div className="flex flex-col w-full">
                                <label className="font-semibold text-neutral-600" htmlFor="">Title </label>
                                <input value={title} onChange={(e) => setTitle(e.target.value)} className="inputContact" type="text" />
                                <p className="mt-[3px] text-red-500 text-[13px]">*6 words max</p>

                            </div>
                            <div className="flex flex-col w-full">
                                <label className="font-semibold text-neutral-600" htmlFor="">Author</label>
                                <input value={author} onChange={(e) => setAuthor(e.target.value)} className="inputContact" type="text" />

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


                            <Editor
                                editorState={editorState}
                                toolbarClassName="toolbarClassName no-scrollbar border border-blu"
                                wrapperClassName="wrapperClassName no-scrollbar rr min-h-[650px]  mt-[10px]"
                                editorClassName="editorClassName no-scrollbar border border-nuetral-700 p-[10px]"
                                onEditorStateChange={onEditorStateChange}
                            />



                        </div>

                        {/* <textarea className="h-[600px] w-[50%]" value={draftToHtml(convertToRaw(editorState.getCurrentContent()))} ></textarea> */}
                    </div>
                }






            </div>
        </MainDash>
    );
}

export default EditBlogsComp;