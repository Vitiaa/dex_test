import axios from "axios";

const AddImage = async (formData: FormData) => {
  const { data } = await axios.post(
    `http://dev.trainee.dex-it.ru/api/Image/SaveImage`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    }
  );

  return data;
};

export  const imageAPI =  {
    AddImage
}