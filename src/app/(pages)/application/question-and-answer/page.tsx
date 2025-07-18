import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import QuestionAnswer from "@/components/pagesComponents/QuestionAnswer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Materials, Manufacturing, Consulting at HM-PROFI",
  description:
    "Frequently asked questions on manufacturing tech, product quality, and tailored project consulting at HM-PROFI. Get answers now!",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://hm-profi.com/application/question-and-answer",
    languages: {
      "de": "https://hm-profi.de/application/question-and-answer",
      "en": "https://hm-profi.com/application/question-and-answer",
    },
  },
  openGraph: {
    title: "Materials, Manufacturing, Consulting at HM-PROFI",
    description:
      "Frequently asked questions on manufacturing tech, product quality, and tailored project consulting at HM-PROFI. Get answers now!",
    url: "https://hm-profi.com/application/question-and-answer",
    type: "website",
  },
};

const QuestionAndAnswer = () => {

  return (
    <>
      {/* breadcrumb */}
      <Breadcrumb
        image="/images/breadcrumb/QA3.webp"
        heading={{
          normalWord: "Questions & ",
          highlightedWord: "Answers",
        }}
        linkPages={[
          { name: "HOME", link: "/" },
          {
            name: "APPLICATIONS",
          },
        ]}
        currentPageName={"FAQs"}
      />

      {/* FAQ's */}
      <QuestionAnswer/>
    </>
  );
};

export default QuestionAndAnswer;
