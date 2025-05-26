import React from 'react';
import { Helmet } from 'react-helmet';
import DocPreview from '../components/DocPreview';
import '../styles/pages/Portfolio.css';

export default function Portfolio() {
  return (
    <>
      <Helmet>
        <title>Lesson Portfolio – Jenna Cho</title>
        <meta
          name="description"
          content="Sample lesson plans and slides across subjects, plus your recommendation letters, evaluations, and teaching documentation."
        />
      </Helmet>

      {/* Page Title */}
      <section className="portfolio__intro">
        <h1>Lesson Portfolio</h1>
        <p className="portfolio__subtitle">Sample Lesson Plans (PDFs &amp; Slides)</p>
      </section>

      {/* Social Studies */}
      <section className="portfolio__section">
        <h2>Social Studies</h2>
        <div className="portfolio__grid">
          <DocPreview
            title="Social Studies Lesson Plan"
            subtitle="2nd grade"
            embedUrl="https://docs.google.com/document/d/1ffR_zB7xu3aL3fGDReuenG-qXP0lcxoJA-4a-gPee58/preview"
            viewUrl="https://docs.google.com/document/d/1ffR_zB7xu3aL3fGDReuenG-qXP0lcxoJA-4a-gPee58"
          />
          <DocPreview
            title="Social Studies Lesson Slides"
            subtitle="2nd grade"
            embedUrl="https://docs.google.com/presentation/d/1p9b-rUMu7LfOduFQ9t0-f3cWlUWk4zIHji-_W6TCf0s/preview"
            viewUrl="https://docs.google.com/presentation/d/1p9b-rUMu7LfOduFQ9t0-f3cWlUWk4zIHji-_W6TCf0s/"
          />
        </div>
      </section>

      {/* Arts */}
      <section className="portfolio__section">
        <h2>Arts</h2>
        <div className="portfolio__grid">
          <DocPreview
            title="Arts Lesson Plan"
            subtitle="2nd grade"
            embedUrl="https://docs.google.com/document/d/1MRAxETRBPtff2msMv0JWwnvR9dlIsPbn_BnEaLALNmI/preview"
            viewUrl="https://docs.google.com/document/d/1MRAxETRBPtff2msMv0JWwnvR9dlIsPbn_BnEaLALNmI"
          />
          <DocPreview
            title="Arts Lesson Slides"
            subtitle="2nd grade"
            embedUrl="https://drive.google.com/file/d/10_sat8wbNkOaUWYvswatMq3E7R5fVgJx/preview"
            viewUrl="https://drive.google.com/file/d/10_sat8wbNkOaUWYvswatMq3E7R5fVgJx"
            showOpenButton={false} // Hide the open button for this one
          />
        </div>
      </section>

      {/* ELA & Math */}
      <section className="portfolio__section">
        <h2>English Language Arts &amp; Math</h2>
        <div className="portfolio__grid">
          <DocPreview
            title="English Language Arts"
            subtitle="2nd grade"
            embedUrl="https://docs.google.com/document/d/1A1nEk65Kvw3L5N6k5aN_5qVEApEIRqsM5yCBwRzRguM/preview"
            viewUrl="https://docs.google.com/document/d/1A1nEk65Kvw3L5N6k5aN_5qVEApEIRqsM5yCBwRzRguM"
          />
          <DocPreview
            title="Math"
            subtitle="2nd grade"
            embedUrl="https://docs.google.com/document/d/1KQrDE5Kb9vopWsiolC0Z6nFoi-w8FY3wZiG5pSA8uxg/preview"
            viewUrl="https://docs.google.com/document/d/1KQrDE5Kb9vopWsiolC0Z6nFoi-w8FY3wZiG5pSA8uxg"
          />
        </div>
      </section>

      {/* Science */}
      <section className="portfolio__section">
        <h2>Science</h2>
        <div className="portfolio__grid">
          <DocPreview
            title="Science Lesson Plan"
            subtitle="2nd grade"
            embedUrl="https://docs.google.com/document/d/1xahTJK349X92aaap-nhkpsncokp7WUGwpIH2Ud8nSTk/preview"
            viewUrl="https://docs.google.com/document/d/1xahTJK349X92aaap-nhkpsncokp7WUGwpIH2Ud8nSTk"
          />
          <DocPreview
            title="Science Lesson Slides"
            subtitle="2nd grade"
            embedUrl="https://docs.google.com/presentation/d/1ToQ146UXfeYjBbdmOudFCOXoN9anXWHKOsOdLMkcRR8/preview"
            viewUrl="https://docs.google.com/presentation/d/1ToQ146UXfeYjBbdmOudFCOXoN9anXWHKOsOdLMkcRR8"
          />
        </div>
      </section>

      {/* Recommendation Letters */}
      <section className="portfolio__section">
        <h2>Recommendation Letters</h2>
        <div className="portfolio__grid">
          <DocPreview
            title="Deanna Putnam"
            subtitle="Principal of El Cerrito Elementary  School"
            embedUrl="https://drive.google.com/file/d/1Ac7ZxJPKRiqLpPhJmn0NDefBAv0hO1bF/preview"
            viewUrl="https://drive.google.com/file/d/1Ac7ZxJPKRiqLpPhJmn0NDefBAv0hO1bF"
          />
          <DocPreview
            title="Paula Denen"
            subtitle="Former Principal of LAUSD and University Supervisor at CSUN"
            embedUrl="https://drive.google.com/file/d/1T5Qvmm1WIOzE2tRpJnHpZmi5OM_MBqG9/preview"
            viewUrl="https://drive.google.com/file/d/1T5Qvmm1WIOzE2tRpJnHpZmi5OM_MBqG9"
          />
            <DocPreview
            title="Tiffany Ramirez"
            subtitle="6th grade teacher, El Cerrito Elementary School"
            embedUrl="https://drive.google.com/file/d/1OgdThSIgMGH9oLjXl-WucphOcRqWv97t/preview"
            viewUrl="https://drive.google.com/file/d/1OgdThSIgMGH9oLjXl-WucphOcRqWv97t"
          />
          <DocPreview
            title="Myrissa Ortiz"
            subtitle="2nd grade teacher, Tulsa Street Elementary School"
            embedUrl="https://drive.google.com/file/d/1Alf4cOaW90WBACnponNnUHsYrHoQlYpz/preview"
            viewUrl="https://drive.google.com/file/d/1Alf4cOaW90WBACnponNnUHsYrHoQlYpz"
          />
          <DocPreview
            title="Yiyuan Tiffany Zhang"
            subtitle="Assistant Principal, Irvine International Academy"
            embedUrl="https://drive.google.com/file/d/1bP2KiDcjfxR900oU0EMSo1wGv-f3awgH/preview"
            viewUrl="https://drive.google.com/file/d/1bP2KiDcjfxR900oU0EMSo1wGv-f3awgH"
          />
        </div>
      </section>

      {/* Teaching Documentation */}
      <section className="portfolio__section">
        <h2>Teaching Documentation</h2>
        <div className="portfolio__grid">
          <DocPreview
            title="Early Field Experience Log"
            subtitle="57 hours completed"
            embedUrl="https://drive.google.com/file/d/1DBRDDo8ueBifx3qxdWSl-R3fYPHjf7HB/preview"
            viewUrl="https://drive.google.com/file/d/1DBRDDo8ueBifx3qxdWSl-R3fYPHjf7HB"
          />
          <DocPreview
            title="Multiple Subject Credential Program"
            subtitle=""
            embedUrl="https://drive.google.com/file/d/1OCJmGmrNpRhuif7bB-VD8CjxW2htWnNo/preview"
            viewUrl="https://drive.google.com/file/d/1OCJmGmrNpRhuif7bB-VD8CjxW2htWnNo"
            showOpenButton={false} // Hide the open button for this one
          />
        </div>
      </section>
    </>
  );
}
