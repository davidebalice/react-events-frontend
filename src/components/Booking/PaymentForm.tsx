import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return; // Non fare nulla se Stripe o Elements non sono ancora pronti
    }

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      return; // Non fare nulla se l'elemento della carta non è presente
    }

    const result = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (result.error) {
      console.error(result.error.message);
    } else {
      console.log("Pagamento effettuato con successo:", result.paymentMethod);
      // Esegui ulteriori azioni, come invio di dati al tuo server
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Paga
      </button>
    </form>
  );
}

export default PaymentForm;
