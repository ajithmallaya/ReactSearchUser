export const getAppDataById = (id: string) => {
    let data;
    const inputElement = document.getElementById(id) as HTMLInputElement;
  
    if (inputElement) {
      try {
        data = JSON.parse(inputElement.value);
      } catch {
        data = null;
      }
    }
    return data;
  };  