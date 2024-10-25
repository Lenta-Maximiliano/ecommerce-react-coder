import { getFirestore, collection, addDoc, doc, updateDoc } from 'firebase/firestore';

export async function createOrderInFirestore(order) {
  try {
    const db = getFirestore();
    const orders = collection(db, 'order');

    const snapshot = await addDoc(orders, order);

    const getDocRef = doc(db, 'order', snapshot.id);
    await updateDoc(getDocRef, { orderId: snapshot.id });

    return snapshot.id;
    
  } catch (error) {
    console.error("Error en el proceso de creación de la orden:", error);
    throw new Error("Error al crear la orden");
  }
}
