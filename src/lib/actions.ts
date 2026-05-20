"use server";

/**
 * Legacy server action kept for reference.
 * The live contact form now submits through EmailJS on the client.
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
