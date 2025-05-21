"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function BlogIndexPage() {
  const t = useTranslations("BlogPage");

  // Assuming posts are 'post1', 'post2', etc. in your translations
  const posts = [
    { id: "post1", slug: t("post1.slug") },
    { id: "post2", slug: t("post2.slug") },
  ];

  return (
    <section className="bg-rebel-black text-rebel-text py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="font-pixel text-4xl sm:text-5xl text-rebel-neon-green text-center font-bold mb-6">
          {t("title")}
        </h1>
        <p className="text-lg sm:text-xl text-rebel-text text-center mb-12">
          {t("intro")}
        </p>
        <div className="space-y-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-rebel-card border border-rebel-border rounded-lg p-6 hover:border-rebel-neon-green transition-colors duration-300"
            >
              <h2 className="font-pixel text-2xl text-rebel-neon-green mb-2">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-rebel-electric-blue"
                >
                  {t(`${post.id}.title`)}
                </Link>
              </h2>
              <p className="text-sm text-gray-400 mb-3">
                {t(`${post.id}.date`)} by {t(`${post.id}.author`)}
              </p>
              <p className="text-rebel-text mb-4">
                {t(`${post.id}.summary`)}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-block font-semibold text-rebel-electric-blue hover:text-rebel-magenta"
              >
                {t("readMore")}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
