import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = {
  title: "Privacy Policy - Loventure",
  description: "Privacy Policy for Loventure app",
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <PageHeader title="Privacy Policy" lastUpdated="March 7, 2026" />

      <section className="space-y-6 text-gray-700 dark:text-gray-200 leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p>
            Welcome to Loventure. We respect your privacy and are committed to
            protecting your personal data. This privacy policy explains how we
            collect, use, and safeguard your information when you use our mobile
            application.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            2. Information We Collect
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Account Information:</strong> Name, email address, and
              profile details you provide when creating an account.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you interact
              with the app, including features used and time spent.
            </li>
            <li>
              <strong>Device Information:</strong> Device type, operating system
              version, and unique device identifiers.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To provide and maintain our service</li>
            <li>To personalize your experience</li>
            <li>To communicate with you about updates and changes</li>
            <li>To detect and prevent technical issues</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. Data Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third
            parties. We may share data with trusted service providers who assist
            us in operating our app, subject to strict confidentiality
            agreements.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your
            personal information. However, no method of transmission over the
            internet or electronic storage is 100% secure.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">6. Data Retention</h2>
          <p>
            We retain your personal data only for as long as necessary to
            fulfill the purposes outlined in this policy. You may request
            deletion of your account and associated data at any time.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">7. Your Rights</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access your personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent at any time</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            8. Children&apos;s Privacy
          </h2>
          <p>
            Our app is not intended for children under the age of 13. We do not
            knowingly collect personal information from children under 13.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            9. Changes to This Policy
          </h2>
          <p>
            We may update this privacy policy from time to time. We will notify
            you of any changes by posting the new policy within the app and
            updating the &quot;Last updated&quot; date.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy, please contact
            us at:
          </p>
          <p className="mt-2 font-medium">support@loventure.app</p>
        </div>
      </section>
    </main>
  );
}
