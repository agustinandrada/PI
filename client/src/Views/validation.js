export default function validation(form, setErrors, errors) {
  if (!form.name) {
    setErrors({ ...errors, name: "Nombre vacio" });
    return errors;
  }
  const newErrors = {};

  if (!/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(form.name)) {
    newErrors.name = "Nombre invalido";
  }

  if (form.weight.length < 5) {
    newErrors.weight = "Falta especificar peso";
  } else {
    if (!/[0-9_-]/.test(form.weight)) {
      newErrors.weight = "Expresion invalida";
    }
  }

  if (form.height.length < 5) {
    newErrors.height = "Falta especificar altura";
  } else {
    if (!/[0-9_-]/.test(form.height)) {
      newErrors.height = "Expresion invalida";
    }
  }

  if (parseInt(form.life_span) < 1) {
    newErrors.life_span = "Falta especificar años de vida";
  } else {
    if (!/[0-9_-]/.test(form.life_span)) {
      newErrors.life_span = "Expresion invalida";
    }
  }

  if ([form.temperaments].length < 0) {
    newErrors.temperaments = "Asigne por lo menos un temperamento";
  } else {
    if (!/[0-9_-]/.test(form.temperaments)) {
      newErrors.temperaments = "Expresion invalida";
    }
  }

  if (!form.image) {
    newErrors.image = "Ingrese un URL";
  } else {
    if (!/(https?:\/\/.*\.(?:png|jpg))/i.test(form.image)) {
      newErrors.image = "Expresion invalida";
    }
  }

  setErrors(newErrors);
  return newErrors;
}
