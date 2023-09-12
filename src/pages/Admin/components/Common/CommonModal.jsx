import { useState } from "react";
import Delete from "../../../../components/icons/Delete";
import Upload from "../../../../components/icons/Upload";
import XClose from "../../../../components/icons/XClose";
import {
  useCreateBlogMutation,
  useUpdateBlogMutation,
} from "../../../../redux/api/apiSlice";

export const Modal = ({ blog, mode, closeModal }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [title, setTitle] = useState(mode === "edit" ? blog.title : "");
  const [post, setPost] = useState(mode === "edit" ? blog.post : []);
  const [titleError, setTitleError] = useState(false);
  const [postError, setPostError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [selectedFile, setSelectedFile] = useState(
    mode === "edit" ? blog?.media : null
  );
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUploading, setImageUploading] = useState(false);
  const [createBlog] = useCreateBlogMutation();
  const [updateBlog] = useUpdateBlogMutation();
 
   //Handling Drag and Drop
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFileUpload(e.dataTransfer.files);
  };

  const handleFileInputChange = (e) => {
    handleFileUpload(e.target.files);
  };


    //crating local url of image
  const handleFileUpload = (files) => {
    if (files.length > 0) {
      setSelectedImage(files[0]);
      const url = URL.createObjectURL(files[0]);
      setSelectedFile(url);
    }
  };


   //handle uploading file to the imageBB first, the set the url to the db. You need to put your ImageBB Api url & key here. You will get the key after creating an account to the imageBB.It's pretty simple. You will find the key there.

  const handleUpload = async () => {
    if (!selectedFile) {
      setImageError(true);
      return;
    }
    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      // Upload to ImageBB
      setImageUploading(true);
      const imagebbResponse = await fetch(
        "https://api.imgbb.com/1/upload?key=de62d9074dfab95edf03c827f18def4b",
        {
          method: "POST",
          body: formData,
        }
      );
      const imagebbData = await imagebbResponse.json();
      setImageUploading(false);
      return imagebbData?.data?.url;
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setTitleError(false);
  };

  
  const handlePostChange = (e) => {
    const newText = e.target.value;

    // Replace line breaks with <br> tags
    const textWithLineBreaks = newText.replace(/\n/g, "</br>");

    // Split the text into paragraphs using </br> line breaks
    const paragraphs = textWithLineBreaks.split("</br>"); 
    setPost(paragraphs);
    setPostError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setTitleError(true);
      return;
    }

    if (post.length <= 0) {
      setPostError(true);
      return;
    }

    //using switch and case method for handling different actions. Re-using this component
    switch (mode) {
      case "create":
        // eslint-disable-next-line no-case-declarations
        const imageUrl = await handleUpload();

        if (imageUrl) {
          const postData = {
            media: imageUrl,
            title,
            post,
            date: new Date(),
            comment: 0,
            author: "Ravi Pal",
          };

          try {
            setImageUploading(true);
            await createBlog(postData);
            setImageUploading(false);
            closeModal();
          } catch (error) {
            console.error("Error creating blog:", error);
          }
        }
        break;

      case "edit":
        // eslint-disable-next-line no-case-declarations
        const updatedFields = {};

        if (title !== blog.title) {
          updatedFields.title = title;
        }

        if (post !== blog.post) {
          updatedFields.post = post;
        }
        if (post !== blog.post) {
          updatedFields.post = post;
        }
        if (selectedFile !== null) {
          const imageUrl = await handleUpload();
          updatedFields.media = imageUrl;
        }

        try {
          setImageUploading(true);
          await updateBlog({ id: blog._id, newBlog: updatedFields });
          setImageUploading(false);
          closeModal();
        } catch (error) {
          console.error("Error updating blog:", error);
        }
        break;

      default:
        break;
    }
  };

  return (
    <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white pt-8 px-8 pb-4 rounded-lg shadow-md w-[95%] lg:w-2/4 h-[90%] overflow-y-auto">
        <div className="flex justify-between items-center mb-4 border-b-[1px] border-solid border-gray-200 pb-3">
          <h3 className="text-xl font-semibold ">
            {" "}
            {mode === "edit" ? "Edit" : "Create New"} Post
          </h3>
          <button
            onClick={closeModal}
            className="cursor-pointer hover:bg-gray-200 p-2 rounded-md"
          >
            <XClose size={20} />
          </button>
        </div>
        <div className="pb-2">
          <div className="flex justify-center mt-5">
            <div className="w-full">
              <form onSubmit={handleSubmit}>
                {selectedFile === null ? (
                  <div
                    className={`border-2 border-dashed ${
                      imageError ? "border-red-500" : "border-gray-300"
                    } rounded-lg p-8 text-center cursor-pointer mb-6 ${
                      isDragOver ? "border-blue-500" : ""
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    <div className="flex justify-center mb-4 text-gray-500">
                      <Upload size={34} />
                    </div>
                    <div className="text-gray-500 mb-2 text-sm">
                      Drag and drop an image here or
                      <label
                        htmlFor="file-input"
                        className="text-blue-500 cursor-pointer mx-1"
                      >
                        browse
                      </label>
                      to upload.
                    </div>
                    <input
                      type="file"
                      id="file-input"
                      className="hidden"
                      accept="image/*"
                      onChange={handleFileInputChange}
                    />
                  </div>
                ) : (
                  <div className="h-60 border-[1px] border-solid border-gray-200 rounded-md mb-6 p-1 relative">
                    <img
                      src={selectedFile}
                      alt="blog-thumbnail"
                      className="w-full h-full rounded-md"
                    />

                    <div
                      onClick={() => setSelectedFile(null)}
                      className="transition-all duration-500 ease-in-out absolute right-2 top-2 bg-white shadow-md p-4 rounded-md cursor-pointer hover:bg-[#243499] hover:text-white"
                    >
                      <Delete size={20} />
                    </div>
                  </div>
                )}
                <div className="flex flex-col gap-2">
                  <label className="text-lg text-gray-700" htmlFor="name">
                    Title
                  </label>
                  <input
                    className={`w-auto h-10 px-6 border-[1px] focus:ring-1 focus:ring-[#ffffff] outline-none border-solid border-gray-200 ${
                      titleError ? "border-red-500" : ""
                    } rounded-md`}
                    type="text"
                    placeholder="Write your post title"
                    onChange={handleTitleChange}
                    defaultValue={title}
                  />

                  {titleError && (
                    <p className="text-red-500 text-sm ">
                      You must enter a title
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2 mt-3">
                  <label className="text-lg text-gray-700" htmlFor="name">
                    Post
                  </label>
                  <textarea
                    className={`w-full px-6 border-[1px] border-solid border-gray-200 focus:ring-1 focus:ring-[#ffffff] outline-none rounded-md py-4 ${
                      postError ? "border-red-500" : ""
                    }`}
                    name="tax-area"
                    id="1"
                    cols="30"
                    rows="10"
                    placeholder="Write your post"
                    onChange={handlePostChange}
                    defaultValue={post}
                  ></textarea>
                  {postError && (
                    <p className="text-red-500 text-sm ">
                      You must write some characters
                    </p>
                  )}
                </div>
                <button className="w-full h-16 bg-[#243499] text-white hover:bg-white hover:text-[#243499] text-center text-xl font-semibold rounded-md border-[1px] border-solid border-[#243499] transition-all delay-200 ease-in cursor-pointer mt-4">
                  {!imageUploading ? "Post" : "Loading..."}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
