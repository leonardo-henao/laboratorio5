const sendFormContact = (data) => {
  const formData = new FormData(data);

  alert(`Gracias por tu mensaje, ${formData.get("name")}`);
};
