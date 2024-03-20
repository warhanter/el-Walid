const calcMoyen = () => {
  let allModules = 0;
  let numberOfModules = 0;
  let moyen = 0;
  const table = document.getElementById("table");
  const rows = table.getElementsByTagName("tr");
  if (document.getElementById("error")) {
    document.getElementById("error").remove();
  }
  for (let index = 1; index < rows.length - 1; index++) {
    const row = rows[index];
    const inputs = row.getElementsByTagName("input");
    for (let index = 1; index < inputs.length; index++) {
      if (parseInt(inputs[index].value) > 20) {
        inputs[index].focus();
        inputs[index].style.backgroundColor = "#dc3545";
        inputs[index].style.color = "#fff";
        const error = document.createElement("p");
        error.innerHTML = "error: Value must be between 0 and 20";
        error.id = "error";
        error.setAttribute(
          "style",
          "color: white; padding: 20px; background-color: #dc3545; text-align: center; font-size: 30px"
        );
        document.body.appendChild(error);
        throw new Error("Something went badly wrong!");
      } else if (inputs[index].style.color === "rgb(255, 255, 255)") {
        inputs[index].style.backgroundColor = "#fff";
        inputs[index].style.color = "#000";
      }
      const moduleMoyen =
        Array.from(inputs)
          .slice(1, inputs.length - 1)
          .reduce((a, b) => a + parseInt(b.value), 0) /
        (inputs.length - 2);
      inputs[inputs.length - 1].value = moduleMoyen.toFixed(2);
      allModules += moduleMoyen;
      numberOfModules++;
    }
  }
  moyen = (allModules / numberOfModules).toFixed(2);
  document.getElementById("moyen").value = moyen;
};
