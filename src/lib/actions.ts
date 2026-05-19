"use server";

/**
 * Server Action to handle Contact Form submissions.
 * In a real production environment, you would use a service like Resend, SendGrid, or Postmark here.
 */
export async function submitContactForm(formData: FormData) {
  // Extract data
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const service = formData.get("service");
  const message = formData.get("message");

  // Server-side validation
  if (!firstName || !lastName || !email || !phone || !message) {
    return {
      success: false,
      error: "All required fields must be filled out.",
    };
  }

  try {
    // ── PRO PRODUCTION STEP ──────────────────────────────────
    // Here you would integrate with an email provider.
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'Remmy Moore Health <onboarding@resend.dev>',
    //   to: ['info@remmymoorehealthcare.com'],
    //   subject: `New Care Inquiry from ${firstName} ${lastName}`,
    //   text: `Service: ${service}\nPhone: ${phone}\nEmail: ${email}\n\nMessage: ${message}`,
    // });

    // Simulate network delay for better UX (loading states)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Log the submission in development
    console.log("Form Submission Received:", {
      name: `${firstName} ${lastName}`,
      email,
      phone,
      service,
      message,
    });

    return {
      success: true,
      message: "Your message has been sent successfully. A care coordinator will contact you soon.",
    };
  } catch (error) {
    console.error("Submission Error:", error);
    return {
      success: false,
      error: "There was an error sending your message. Please try again later or call us directly.",
    };
  }
}
