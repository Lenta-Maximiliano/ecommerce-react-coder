import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import './UserInfo.css';

export default function UserInfo({ cart, createNewOrder }) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirm, setEmailConfirm] = useState('');
  const [telefono, setTelefono] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); 

  const validateForm = () => {
    let formErrors = {};

    if (!nombre.trim()) formErrors.nombre = "El nombre es obligatorio";
    if (!apellido.trim()) formErrors.apellido = "El apellido es obligatorio";
    
    if (!email.trim()) {
      formErrors.email = "El email es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "El formato de email no es válido";
    }

    if (!emailConfirm.trim()) {
      formErrors.emailConfirm = "La confirmación de email es obligatoria";
    } else if (email !== emailConfirm) {
      formErrors.emailConfirm = "Los emails no coinciden";
    }

    if (!telefono.trim()) {
      formErrors.telefono = "El teléfono es obligatorio";
    } else if (!/^\d+$/.test(telefono)) {
      formErrors.telefono = "El teléfono solo debe contener números";
    } else if (telefono.length < 8) {
      formErrors.telefono = "El teléfono debe tener al menos 8 dígitos";
    }

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      const order = {
        buyer: {
          nombre,
          apellido,
          email,
          telefono,
        },
        items: cart,
        creadoEn: new Date(),
      };

      createNewOrder(order);
      navigate("/"); 
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="userInfo-container">
      <h3 className="userInfo-container-title">Información del Usuario</h3>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="userInfo-input userInfo-input-name"
            required
          />
          {errors.nombre && <p className="errorInput">{errors.nombre}</p>}

          <input
            type="text"
            placeholder="Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            className="userInfo-input userInfo-input-last-name"
            required
          />
          {errors.apellido && <p className="errorInput">{errors.apellido}</p>}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="userInfo-input userInfo-input-email"
            required
          />
          {errors.email && <p className="errorInput">{errors.email}</p>}

          <input
            type="email"
            placeholder="Confirmar Email"
            value={emailConfirm}
            onChange={(e) => setEmailConfirm(e.target.value)}
            className="userInfo-input userInfo-input-email-confirm"
            required
          />
          {errors.emailConfirm && <p className="errorInput">{errors.emailConfirm}</p>}

          <input
            type="tel"
            placeholder="Teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className="userInfo-input userInfo-input-tel"
            required
            pattern="[0-9]{8,}"
          />
          {errors.telefono && <p className="errorInput">{errors.telefono}</p>}
        </div>
        
        <button className="btnFinalizarCompra" type="submit">Finalizar Compra</button>
      </form>
    </div>
  );
}

