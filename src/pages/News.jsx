import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Fragment, useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

const News = () => {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isTested, setIsTested] = useState(false);
  const [editData, setEditData] = useState({
    id: "",
    date: "",
    title: "",
    text: "",
    imgs: [preview],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/news");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
      }
    };
    fetchData();
    if (JSON.parse(localStorage.getItem("test"))) {
      setIsTested(true);
    }
  }, []);

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(
        "https://api.imgbb.com/1/upload?key=388b25b4fa604824488283d8e265bc92",
        {
          method: "POST",
          body: formData,
        },
      );
      const result = await response.json();
      return result.data.url;
    } catch (error) {
      console.error("Rasm yuklashda xatolik:", error);
      return null;
    }
  };

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    console.log(selectedFile);
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));

    if (editModal) {
      const imageUrl = await uploadImage(selectedFile);
      setEditData((prev) => ({ ...prev, imgs: [imageUrl] }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!date || !title || !text || !file) {
      alert("Iltimos, barcha maydonlarni to'ldiring va rasm tanlang!");
      return;
    }

    setLoading(true);

    const imageUrl = await uploadImage(file);
    if (!imageUrl) {
      alert("Rasm yuklanmadi!");
      setLoading(false);
      return;
    }

    const lastId = data.length ? Number(data[data.length - 1].id) + 1 : 1;
    const newPost = {
      id: lastId.toString(),
      date: date,
      title: title,
      text: text,
      imgs: [imageUrl],
    };

    await fetch("http://localhost:3000/news", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: { "Content-Type": "application/json" },
    });

    setData([...data, newPost]);
    alert("Post muvaffaqiyatli yaratildi!");
    setTitle("");
    setDate("");
    setText("");
    setFile(null);
    setPreview(null);
    setModal(false);
    setLoading(false);
  };

  const handleDelete = async (id) => {
    console.log(id);
    if (confirm("Siz bu postni o'chirishni xohlaysizmi?")) {
      try {
        const response = await fetch(`http://localhost:3000/news/${id}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          throw new Error("Serverda xatolik yuz berdi");
        }

        const result = await response.json();

        const filteredData = data.filter((item) => item.id !== result.id);
        console.log(filteredData);
        setData(filteredData);
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
      }
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let imageUrl = editData.imgs[0]; // Eski rasm saqlanib qoladi
    if (file) {
      const uploadedUrl = await uploadImage(file);
      if (uploadedUrl) {
        imageUrl = uploadedUrl; // Yangi rasm yuklangan bo'lsa, yangilaymiz
      }
    }

    const updatedPost = {
      id: editData.id,
      date: editData.date,
      title: editData.title,
      text: editData.text,
      imgs: [imageUrl], // Yangilangan rasm
    };

    await fetch(`http://localhost:3000/news/${editData.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedPost),
      headers: { "Content-Type": "application/json" },
    });

    setData((prevData) =>
      prevData.map((item) => (item.id === editData.id ? updatedPost : item)),
    );

    alert("Post muvaffaqiyatli yangilandi!");
    setEditModal(false);
    setLoading(false);
  };

  return (
    <>
      <Nav />
      <main className="w-[100%] bg-gradient-to-b from-blue-50 to-white py-[48px] px-[16px]">
        <div className="w-[100%] sm:w-[600px] md:w-[740px] lg:w-[990px] xl:w-[1250px] mx-auto">
          <div>
            <h2 className="text-[30px] md:text-[36px] font-bold text-center">
              News
            </h2>
            {isTested && (
              <button
                className="py-[4px] px-[14px] bg-blue-500 rounded-[6px] text-[#fff] font-semibold"
                onClick={() => setModal(true)}
              >
                Create
              </button>
            )}
          </div>
          <div className="w-[100%] h-auto grid grid-cols-1 lg:grid-cols-2 gap-[24px] mt-[32px]">
            {data.length ? (
              data.map((item) => (
                <Fragment key={item.id}>
                  <div className="w-[100%] h-auto bg-[#fff] shadow rounded-[12px] p-[16px]">
                    <Swiper
                      slidesPerView={1}
                      className="w-[100%] h-[192px] bg-[#333]"
                      loop={item.imgs.length > 1}
                      modules={[Navigation]}
                      navigation
                      speed={600}
                    >
                      {item.imgs.map((img, index) => (
                        <SwiperSlide key={`${item.id}-${index}`}>
                          <img
                            className="w-[100%] h-[100%] object-cover"
                            src={img}
                            alt={`Slide ${index}`}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div className="w-[100%]">
                      <div className="w-[100%] h-auto flex justify-between mt-[16px]">
                        <span className="text-[12px] font-bold bg-gray-200 px-[10px] py-[2px] rounded-[6px]">
                          {item.date}
                        </span>
                        <button className="text-[14px] text-blue-600 hover:underline">
                          Read more
                        </button>
                      </div>
                      <h3 className="text-[18px] font-bold my-[8px]">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">{item.text}</p>
                    </div>
                    {isTested && (
                      <>
                        <div className="w-[100%] h-auto flex flex-row items-center gap-[30px] mt-[20px]">
                          <button
                            onClick={() => {
                              setEditData({
                                id: item.id,
                                date: item.date,
                                text: item.text,
                                title: item.title,
                                imgs: item.imgs,
                              }),
                                setEditModal(true);
                            }}
                            className="bg-[#00f] text-[#fff] font-semibold py-[2px] px-[10px] rounded-[4px] ml-auto"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="bg-[#f00] text-[#fff] font-semibold py-[2px] px-[10px] rounded-[4px] mr-auto"
                          >
                            Delete
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </Fragment>
              ))
            ) : (
              <p>No data available</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
      {modal && (
        <>
          <div
            className="w-[100%] h-[100vh] fixed top-0 left-0 bg-[#0008] z-[50]"
            onClick={() => setModal(false)}
          ></div>
          <div className="w-[100%] h-[100vh] flex items-center justify-center fixed top-0 left-0 z-[60]">
            <div className="w-[90%] max-w-[400px] bg-white border-2 border-blue-500 rounded-[6px] p-4">
              <div className="flex justify-between items-center">
                <p className="text-[20px] font-semibold">Create Post</p>
                <IoClose
                  size={20}
                  onClick={() => setModal(false)}
                  className="cursor-pointer"
                />
              </div>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-[10px] mt-4"
              >
                <input
                  type="text"
                  placeholder="Title"
                  className="border p-2 rounded"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <input
                  type="date"
                  className="border p-2 rounded"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <textarea
                  placeholder="Text"
                  className="border p-2 rounded"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
                <input type="file" onChange={handleFileChange} />
                {preview && (
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-[100px] h-[100px] object-cover mt-2"
                  />
                )}
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded"
                  disabled={loading}
                >
                  {loading ? "Uploading..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </>
      )}
      {editModal && (
        <>
          <div
            onClick={() => setEditModal(false)}
            className="w-[100%] h-[100vh] fixed top-0 left-0 bg-[#0008] z-[50] cursor-pointer"
          ></div>

          <div className="w-[100%] h-[100vh] flex items-center justify-center fixed top-0 left-0 z-[60]">
            <div className="w-[90%] max-w-[400px] bg-white border-2 border-blue-500 rounded-[6px] p-4">
              <div className="flex justify-between items-center">
                <p className="text-[20px] font-semibold">Create Post</p>
                <IoClose
                  size={20}
                  onClick={() => setEditModal(false)}
                  className="cursor-pointer"
                />
              </div>
              <form
                onSubmit={handleEdit}
                className="flex flex-col gap-[10px] mt-4"
              >
                <input
                  type="text"
                  placeholder="Title"
                  className="border p-2 rounded"
                  value={editData.title}
                  onChange={(e) =>
                    setEditData({ ...editData, title: e.target.value })
                  }
                />
                <input
                  type="date"
                  className="border p-2 rounded"
                  value={editData.date}
                  onChange={(e) =>
                    setEditData({ ...editData, date: e.target.value })
                  }
                />
                <textarea
                  placeholder="Text"
                  className="border p-2 rounded"
                  value={editData.text}
                  onChange={(e) =>
                    setEditData({ ...editData, text: e.target.value })
                  }
                />
                <input type="file" onChange={handleFileChange} />
                {editData.imgs && (
                  <img
                    src={editData.imgs[0]}
                    alt="Preview"
                    className="w-[100px] h-[100px] object-cover mt-2"
                  />
                )}
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded"
                  disabled={loading}
                >
                  {loading ? "Uploading..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default News;
