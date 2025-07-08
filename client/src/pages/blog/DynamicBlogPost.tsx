import { Helmet } from 'react-helmet';
import { useParams } from 'wouter';
import { siteMetadata } from '@/lib/seo';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ScrollLink } from '@/utils/scrollToTop';

// Blog post data - matches the data from Blog.tsx
const blogPostsData = [
  {
    id: 'microwave-problems-naples-homes',
    title: 'Most Common Microwave Problems in Naples Homes',
    excerpt: 'Troubleshoot microwave issues unique to Southwest Florida homes with expert repair tips.',
    content: `
      <div class="prose max-w-none">
        <p>Microwaves are essential kitchen appliances in Naples homes, but Southwest Florida's unique climate and conditions can create specific challenges. This comprehensive guide covers the most common microwave problems Naples homeowners face and provides expert solutions.</p>
        
        <h2>Common Microwave Problems in Naples</h2>
        
        <h3>1. Humidity-Related Electrical Issues</h3>
        <p>Naples' high humidity can cause electrical components to malfunction, leading to sporadic operation or complete failure.</p>
        
        <h3>2. Power Fluctuation Damage</h3>
        <p>Frequent thunderstorms and power fluctuations in Southwest Florida can damage sensitive microwave electronics.</p>
        
        <h3>3. Magnetron Failure</h3>
        <p>The coastal salt air can accelerate corrosion of internal components, particularly the magnetron.</p>
        
        <h3>4. Door Seal Problems</h3>
        <p>Heat and humidity can cause door seals to deteriorate faster, leading to microwave leakage.</p>
        
        <h2>When to Call Naples Appliance Repair</h2>
        <p>If your microwave exhibits any concerning symptoms, contact our certified technicians immediately. We service all major brands throughout Naples and surrounding areas.</p>
        
        <div class="bg-blue-50 p-6 rounded-lg mt-8">
          <h3 class="text-lg font-bold text-blue-800 mb-3">Professional Microwave Repair in Naples</h3>
          <p class="text-blue-700">Don't risk safety issues with DIY microwave repairs. Our experienced technicians provide safe, reliable microwave repair services throughout Southwest Florida.</p>
        </div>
      </div>
    `,
    author: 'Naples Appliance Repair Team',
    date: '2024-12-12',
    readTime: '8 min read',
    category: 'Troubleshooting',
    tags: ['microwave', 'problems', 'naples', 'kitchen']
  },
  // Add more blog posts as needed - for now this serves as a template
];

export default function DynamicBlogPost() {
  const params = useParams();
  const postId = params.id;
  
  // Find the blog post data
  const blogPost = blogPostsData.find(post => post.id === postId);
  
  // If no specific blog post found, create a default template
  const defaultPost = {
    id: postId || 'default',
    title: `${postId?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} | Naples Appliance Repair`,
    excerpt: 'Expert appliance repair tips and advice for Naples homeowners.',
    content: `
      <div class="prose max-w-none">
        <p>This comprehensive guide provides expert advice for Naples homeowners dealing with appliance issues. Our certified technicians share professional insights to help you maintain and repair your appliances.</p>
        
        <h2>Expert Appliance Solutions for Naples</h2>
        <p>Naples' unique climate creates specific challenges for home appliances. High humidity, salt air, and frequent storms require specialized knowledge and preventive care.</p>
        
        <h3>Professional Service in Southwest Florida</h3>
        <p>Our experienced team understands the local climate challenges and provides reliable repair services for all major appliance brands.</p>
        
        <div class="bg-blue-50 p-6 rounded-lg mt-8">
          <h3 class="text-lg font-bold text-blue-800 mb-3">Need Professional Help?</h3>
          <p class="text-blue-700">Contact Naples Appliance Repair for expert service throughout Southwest Florida. We're here to help with all your appliance repair needs.</p>
        </div>
      </div>
    `,
    author: 'Naples Appliance Repair Team',
    date: '2024-12-01',
    readTime: '8 min read',
    category: 'Appliance Repair',
    tags: ['appliance repair', 'naples', 'maintenance']
  };
  
  const post = blogPost || defaultPost;

  return (
    <div>
      <Header />
      <Helmet>
        <title>{post.title} | {siteMetadata.title}</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={`${post.tags.join(', ')}, Naples FL appliance repair, Southwest Florida appliances`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${post.title} | ${siteMetadata.title}`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/blog/${post.id}`} />
        <meta property="og:type" content="article" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`${post.title} | ${siteMetadata.title}`} />
        <meta name="twitter:description" content={post.excerpt} />
        
        {/* Canonical */}
        <link rel="canonical" href={`${siteMetadata.siteUrl}/blog/${post.id}`} />
        
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.excerpt,
            "author": {
              "@type": "Organization",
              "name": post.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "Naples Appliance Repair",
              "url": siteMetadata.siteUrl,
              "logo": `${siteMetadata.siteUrl}/logo.png`
            },
            "datePublished": post.date,
            "url": `${siteMetadata.siteUrl}/blog/${post.id}`,
            "mainEntityOfPage": `${siteMetadata.siteUrl}/blog/${post.id}`
          })}
        </script>
      </Helmet>

      <main>
        <div className="container px-4 py-12 max-w-4xl mx-auto">
          {/* Back to Blog Button */}
          <div className="mb-8">
            <Button variant="outline" asChild>
              <ScrollLink href="/blog" className="inline-flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </ScrollLink>
            </Button>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">{post.category}</Badge>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <article 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Call to Action */}
          <div className="mt-16 bg-muted rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Professional Appliance Repair?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our certified technicians are ready to help with all your appliance repair needs in Naples and surrounding areas.
              Contact us today for reliable, professional service.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <ScrollLink href="/#contact">Schedule Service</ScrollLink>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+12392302100">Call (239) 230-2100</a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}