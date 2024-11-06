const getCSS = (variable) => {
    const bodyStyles = window.getComputedStyle(document.body); // Usando window.getComputedStyle para melhor compatibilidade
    return bodyStyles.getPropertyValue(variable);
  };
  
  const tickConfig = {
    family: getCSS('--font'),
    size: 16,+
    color: getCSS('--primary-color'),
  };
  
  export { getCSS, tickConfig };
  
  