function status(request, response) {
  response.status(200).json({ API: "Funcionando" });
}

export default status;
