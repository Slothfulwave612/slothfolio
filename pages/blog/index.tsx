import Section from '@/components/layout/Section';
import ViewContainer from '@/components/layout/ViewContainer';
import Header from '@/components/main/Header';
import MetaHead from '@/components/seo/MetaHead';
import { getBlogs } from '@/lib/blogs';
import Link from 'next/link';

type BlogLinkType = 'internal' | 'external';
interface DateType {
  date?: number;
  month?: string;
  year: number;
}
interface BlogProps {
  title?: string;
  linkType?: BlogLinkType;
  link?: string;
  publishedAt?: DateType;
}

const BlogView: React.FunctionComponent = () => {
  return (
    <>
      <MetaHead
        title={'Blogs'}
        description={'Blogs'}
        embedSource={{
          twitter:
            '/media/icon.ico',
          linkedin:
            '/media/icon.ico',
          og: '/media/icon.ico',
        }}
      />
      <div className="blog-view-container" id="blog">
        <ViewContainer>
          <Header />
          <Section className="grid grid-cols-1 items-start justify-start gap-12">
            <Section
              className="blogs-list-wrapper mt-8"
              id="blogs-list"
              aria-label="Blogs">
              <h2 className="about-heading leading-snug font-medium text-base text-zinc-900">
                {'My Blogs 🖋'}
              </h2>
              <ul className="blogs-list mt-8 grid grid-cols-1 gap-4">
                {getBlogs()?.map((blog: BlogProps, blogIndex: number) => {
                  if (blog?.link) {
                    return (
                      <li className="blog-item" key={blogIndex}>
                        <div className="blog-item__content-wrapper flex flex-col items-start justify-between gap-1">
                          <Link
                            href={blog?.link}
                            target={
                              blog?.linkType === 'external' ? '_blank' : '_self'
                            }>
                            <h2 className="blog-title text-lg hover:underline max-sm:text-sm max-sm:truncate max-sm:w-[24ch]">
                              {blog?.title}
                            </h2>
                          </Link>
                          <p className="blog-published-at text-sm font-normal text-zinc-500">
                            {blog?.publishedAt?.date && (
                              <span className="published-at__date">
                                {blog?.publishedAt?.date}
                              </span>
                            )}
                            {blog?.publishedAt?.month && (
                              <span className="published-at__month">
                                {blog?.publishedAt?.month}
                              </span>
                            )}
                            {blog?.publishedAt?.year && (
                              <span className="published-at__year">
                                {blog?.publishedAt?.year}
                              </span>
                            )}
                          </p>
                        </div>
                      </li>
                    );
                  } else {
                    return (
                      <li className="blog-item" key={blogIndex}>
                        <div className="blog-item__content-wrapper p-2 flex flex-row items-center justify-between transition-all border-b border-zinc-200 hover:border-orange-200">
                          <h2 className="blog-title cursor-default max-sm:text-sm max-sm:truncate max-sm:w-[24ch]">
                            {blog?.title}
                          </h2>
                          <p className="blog-published-at text-sm font-normal text-zinc-500">
                            {blog?.publishedAt?.date && (
                              <span className="published-at__date">
                                {blog?.publishedAt?.date}
                              </span>
                            )}
                            {blog?.publishedAt?.month && (
                              <span className="published-at__month">
                                {blog?.publishedAt?.month}
                              </span>
                            )}
                            {blog?.publishedAt?.year && (
                              <span className="published-at__year">
                                {blog?.publishedAt?.year}
                              </span>
                            )}
                          </p>
                        </div>
                      </li>
                    );
                  }
                })}
              </ul>
            </Section>
          </Section>
          <div style={{ textAlign: 'center', marginBottom: '0' }}>
            <p style={{ fontSize: '12px', color: '#9B9B9B' }}>
              Website template and code inspired by{' '}
              <a
                href="https://github.com/yashsehgal/personal-website"
                target="_blank"
                style={{ textDecoration: 'underline', color: '#9B9B9B' }}
              >
                yashsehgal
              </a>{' '}
            </p>
          </div>
        </ViewContainer>
      </div>
    </>
  );
};

export default BlogView;
export type { BlogProps };
