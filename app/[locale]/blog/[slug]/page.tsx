// "use client"; // Ensure this is commented out or removed
// import { useTranslations } from "next-intl"; // Temporarily comment out for testing build
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server"; // For server-side translation

// Hardcoded slugs based on current messages/*.json content
const postData: {
  [key: string]: { en: string; tw: string };
} = {
  post1: {
    en: "static-sites-rebellion",
    tw: "static-sites-rebellion", // Assuming slugs are the same for now, or get from messages
  },
  post2: {
    en: "web3-beyond-the-battlecry",
    tw: "web3-beyond-the-battlecry", // Assuming slugs are the same for now
  },
};

export async function generateStaticParams() {
  const locales = ["en", "tw"];
  const params: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    for (const postKey in postData) {
      params.push({ locale, slug: postData[postKey][locale as "en" | "tw"] });
    }
  }
  return params;
}

function renderContent(content: string) {
  return content.split("\n\n").map((paragraph, index) => {
    const lines = paragraph.split("\n");
    return (
      <div key={index} className="mb-4">
        {lines.map((line, lineIndex) => {
          if (line.startsWith("### ")) {
            return (
              <h3
                key={lineIndex}
                className="font-pixel text-xl text-rebel-electric-blue mt-6 mb-2"
              >
                {line.substring(4)}
              </h3>
            );
          }
          return (
            <p key={lineIndex} className="text-rebel-text">
              {line}
            </p>
          );
        })}
      </div>
    );
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "BlogPage",
  });

  const slug = params.slug;

  // Try to find the post key by comparing the slug with translated slugs
  let postKey: string | null = null;
  const potentialPostKeys = ["post1", "post2"]; // Add other post keys if you have more

  for (const key of potentialPostKeys) {
    if (slug === t(`${key}.slug`)) {
      postKey = key;
      break;
    }
  }

  // If no postKey is found after checking all potential keys, then it's a 404
  if (!postKey) {
    return notFound();
  }

  const currentPostKey = postKey as "post1" | "post2"; // Type assertion

  return (
    <section className="bg-rebel-black text-rebel-text py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="text-rebel-electric-blue hover:text-rebel-magenta mb-8 block"
        >
          &lt; {t("title")}{" "}
          {/* Using BlogPage.title for "Back to REBEL INTEL" */}
        </Link>

        <h1 className="font-pixel text-3xl sm:text-4xl text-rebel-neon-green font-bold mb-3">
          {t(`${currentPostKey}.title`)}
        </h1>
        <p className="text-sm text-gray-400 mb-6">
          {t(`${currentPostKey}.date`)} by {t(`${currentPostKey}.author`)}
        </p>
        <div className="prose prose-invert max-w-none">
          {renderContent(t(`${currentPostKey}.content`))}
        </div>
      </div>
    </section>
  );
}
