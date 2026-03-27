import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = {
  title: "Terms of Service - Loventure",
  description: "Terms of Service for Loventure app",
};

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <PageHeader title="Terms of Service" lastUpdated="March 27, 2026" />

      <section className="space-y-6 text-gray-700 dark:text-gray-200 leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold mb-2">
            1. Acceptance of Terms
          </h2>
          <p>
            By downloading, installing, or using the Loventure mobile
            application, you agree to be bound by these Terms of Service. If you
            do not agree to these terms, please do not use the app.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            2. Description of Service
          </h2>
          <p>
            Loventure is a mobile application designed to help couples
            strengthen their relationship through shared activities, challenges,
            and meaningful experiences together.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. User Accounts</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              You must be at least 13 years old to create an account and use the
              app.
            </li>
            <li>
              You are responsible for maintaining the confidentiality of your
              account credentials.
            </li>
            <li>
              You are responsible for all activities that occur under your
              account.
            </li>
            <li>
              You agree to provide accurate and complete information when
              creating your account.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Use the app for any unlawful purpose</li>
            <li>Harass, abuse, or harm other users</li>
            <li>
              Upload or share content that is offensive, inappropriate, or
              violates the rights of others
            </li>
            <li>
              Attempt to gain unauthorized access to the app or its systems
            </li>
            <li>
              Use the app in any way that could damage or impair its
              functionality
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5. User Content</h2>
          <p>
            You retain ownership of any content you create or share through the
            app. By posting content, you grant Loventure a non-exclusive,
            royalty-free license to use, display, and distribute that content
            within the app for the purpose of providing the service.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            6. Intellectual Property
          </h2>
          <p>
            The Loventure app, including its design, features, and content
            created by us, is protected by intellectual property laws. You may
            not copy, modify, distribute, or reverse-engineer any part of the
            app without our prior written consent.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            7. Subscriptions and Payments
          </h2>
          <p>
            Some features of the app may require a paid subscription.
            Subscriptions are billed through the Apple App Store or Google Play
            Store and are subject to their respective terms. You may cancel your
            subscription at any time through your app store account settings.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">8. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your account if you
            violate these terms. You may also delete your account at any time
            through the app settings. Upon termination, your right to use the
            app ceases immediately.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            9. Disclaimer of Warranties
          </h2>
          <p>
            The app is provided &quot;as is&quot; and &quot;as available&quot;
            without warranties of any kind, either express or implied. We do not
            guarantee that the app will be uninterrupted, error-free, or free of
            harmful components.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            10. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by law, Loventure shall not be
            liable for any indirect, incidental, special, or consequential
            damages arising from your use of the app.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            11. Changes to These Terms
          </h2>
          <p>
            We may update these terms from time to time. We will notify you of
            any material changes by posting the updated terms within the app and
            updating the &quot;Last updated&quot; date. Continued use of the app
            after changes constitutes acceptance of the new terms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">12. Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please
            contact us at:
          </p>
          <p className="mt-2 font-medium">support@loventure.app</p>
        </div>
      </section>
    </main>
  );
}
