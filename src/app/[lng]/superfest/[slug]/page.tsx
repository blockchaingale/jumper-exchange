import { notFound } from 'next/navigation';
import { getQuestBySlug } from 'src/app/lib/getQuestBySlug';
import SuperfestPage from 'src/app/ui/superfest/SuperfestMissionPage';

// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string };
// }): Promise<Metadata> {
//   try {
//     const article = await getArticleBySlug(params.slug);

//     if (!article.data || !article.data.data?.[0]) {
//       throw new Error();
//     }

//     const articleData = article.data.data?.[0]
//       .attributes as BlogArticleAttributes;

//     return {
//       title: `Jumper Learn | ${sliceStrToXChar(articleData.Title, 45)}`,
//       description: articleData.Subtitle,
//       openGraph: {
//         title: `Jumper Learn | ${sliceStrToXChar(articleData.Title, 45)}`,
//         description: `${sliceStrToXChar(articleData.Subtitle, 60)}`,
//         images: [
//           {
//             url: `${article.url}${articleData.Image.data.attributes?.url}`,
//             width: 900,
//             height: 450,
//             alt: 'banner image',
//           },
//         ],
//         type: 'article',
//       },
//     };
//   } catch (err) {
//     return {
//       title: `Jumper Learn | ${sliceStrToXChar(params.slug.replaceAll('-', ' '), 45)}`,
//       description: `This is the description for the article "${params.slug.replaceAll('-', ' ')}".`,
//     };
//   }
// }

type Params = Promise<{ slug: string }>;

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;

  const { data, url } = await getQuestBySlug(slug);

  if (!data) {
    return notFound();
  }
  return <SuperfestPage quest={data} url={url} />;
}
