import Swal from 'sweetalert2';
import { createOrderInFirestore } from './firebaseService.js';

export const processOrder = async (order, clearCart) => {
  try {
    const newOrderId = await createOrderInFirestore(order);
    clearCart();

    Swal.fire({
      title: '¡Orden creada!',
      text: `Tu orden ha sido generada con éxito. ID de la orden: ${newOrderId}`,
      icon: 'success',
      confirmButtonText: 'OK',
      allowOutsideClick: false,
    });
    
    return newOrderId;
  } catch (error) {
    console.error("Error en el proceso de la orden:", error);

    Swal.fire({
      title: 'Error',
      text: 'Hubo un problema al procesar tu orden. Por favor, intenta de nuevo.',
      icon: 'error',
      confirmButtonText: 'OK',
    });
    
    throw error;
  }
};
