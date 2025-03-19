
import ConfirmContactForm from "@/components/forms/confirmContact/confirmContactForm";

export default async function ConfirmContact({ params }: { params: Promise<{ email: string }> }) {
  const { email } = await params;

  return (
    <main>
      <ConfirmContactForm email={email} />
    </main>
  );
}