const apiAsync = async value => {
  const result = await fetch(`https://viacep.com.br/ws/${value}/json/`);
  return await result.json();
};

export default apiAsync;
