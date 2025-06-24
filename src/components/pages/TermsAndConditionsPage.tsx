import { IconChevronLeft } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";

export default function TermsAndConditionsPage() {

    return (
        <section>
            <div className="text-center font-comfortaa pt-10 space-y-5 px-5">
                <div className='flex justify-between items-center pb-10'>
                    <Link to="/settings"><IconChevronLeft className='h-10 text-black' /></Link>
                    <h1 className="text-xl font-bold">Términos y condiciones</h1>
                </div>
                <div>
                    <p className="text-sm">Terms and Conditions
                        Last updated: [June 20, 2025]

                        Welcome to our application. By accessing or using this website/app, you agree to the following terms and conditions. Please read them carefully.

                        1. Acceptance of Terms
                        By using this platform, you accept these terms in full. If you disagree with any part, please do not use the service.

                        2. Use of the Platform
                        You agree to use the app only for lawful purposes.

                        You must not use this app in a way that causes harm, or impairs its availability or accessibility.

                        3. User Accounts
                        You are responsible for keeping your login information secure.

                        We reserve the right to suspend or terminate accounts that violate our terms.

                        4. Intellectual Property
                        All content, logos, and designs are the property of this application or its licensors. Reproduction or distribution without permission is prohibited.

                        5. Limitation of Liability
                        We are not responsible for any direct or indirect damages resulting from the use or inability to use this platform.

                        6. Privacy Policy
                        We are committed to protecting your privacy. Please refer to our [Privacy Policy] for more information on how we handle personal data.

                        7. Modifications
                        We may update these terms at any time. Continued use of the platform means you accept any new changes.

                        8. Contact
                        If you have any questions about these Terms and Conditions, please contact us at:
                        Email: correo_ejemplo@example.com
                    </p>

                </div>
            </div>
        </section>
    );
}