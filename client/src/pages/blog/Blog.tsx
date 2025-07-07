import { Helmet } from 'react-helmet';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { siteMetadata } from '@/lib/seo';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from 'wouter';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 'ultimate-guide-extending-appliance-lifespan-southwest-florida',
    title: 'The Ultimate Guide to Extending Your Appliance Lifespan in Southwest Florida',
    excerpt: 'Learn essential maintenance tips and techniques to maximize the life of your home appliances in Naples humid climate.',
    content: '',
    author: 'Naples Appliance Repair Team',
    date: '2025-01-07',
    readTime: '8 min read',
    category: 'Maintenance',
    tags: ['maintenance', 'tips', 'longevity', 'florida']
  },
  {
    id: 'top-10-common-appliance-problems-naples-homeowners',
    title: 'Top 10 Common Appliance Problems Naples Homeowners Face',
    excerpt: 'Discover the most frequent appliance issues in Southwest Florida and how to prevent them before they become costly repairs.',
    content: '',
    author: 'Naples Appliance Repair Team',
    date: '2025-01-06',
    readTime: '10 min read',
    category: 'Troubleshooting',
    tags: ['problems', 'solutions', 'naples', 'repair']
  },
  {
    id: 'beat-naples-heat-high-temperatures-affect-refrigerator',
    title: 'Beat the Naples Heat: How High Temperatures Affect Your Refrigerator',
    excerpt: 'Learn how Naples extreme heat impacts your refrigerator performance and discover expert strategies to keep your appliance running efficiently.',
    content: '',
    author: 'Naples Appliance Repair Team',
    date: '2025-01-05',
    readTime: '12 min read',
    category: 'Seasonal Tips',
    tags: ['heat', 'refrigerator', 'naples', 'temperature']
  },
  {
    id: 'top-5-signs-washer-needs-repair-naples-guide',
    title: 'Top 5 Signs Your Washer Needs Repair (Naples Homeowner Guide)',
    excerpt: 'Recognize the early warning signs that your washing machine needs professional repair and prevent costly breakdowns.',
    content: '',
    author: 'Naples Appliance Repair Team',
    date: '2025-01-04',
    readTime: '11 min read',
    category: 'Repair Guide',
    tags: ['washer', 'repair', 'signs', 'maintenance']
  },
  {
    id: 'naples-ac-not-cooling-appliance-troubleshooting',
    title: 'Why Your Naples AC Won\'t Cool: Is It Really the Appliance or Something Else?',
    excerpt: 'Comprehensive troubleshooting guide to distinguish between appliance issues and other factors affecting your home cooling.',
    content: '',
    author: 'Naples Appliance Repair Team',
    date: '2025-01-03',
    readTime: '13 min read',
    category: 'HVAC Troubleshooting',
    tags: ['ac', 'cooling', 'troubleshooting', 'hvac']
  },
  {
    id: 'protecting-appliances-naples-rainy-season-flood-humidity',
    title: 'Protecting Appliances During Naples\' Rainy Season: Flood & Humidity Prevention',
    excerpt: 'Essential strategies to protect your home appliances during Naples intense rainy season with flood and humidity prevention.',
    content: '',
    author: 'Naples Appliance Repair Team',
    date: '2025-01-02',
    readTime: '14 min read',
    category: 'Storm Protection',
    tags: ['flood', 'humidity', 'protection', 'storm']
  }
];

export default function Blog() {
  return (
    <div>
      <Header />
      <Helmet>
        <title>Appliance Repair Blog | Expert Tips & Guides | {siteMetadata.title}</title>
        <meta 
          name="description" 
          content="Expert appliance repair tips, maintenance guides, and troubleshooting advice for Naples homeowners. Stay informed with our professional insights."
        />
        <meta property="og:title" content={`Appliance Repair Blog | Expert Tips & Guides | ${siteMetadata.title}`} />
        <meta 
          property="og:description" 
          content="Expert appliance repair tips, maintenance guides, and troubleshooting advice for Naples homeowners. Stay informed with our professional insights."
        />
      </Helmet>

      <main>
        <div className="container px-4 py-12 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Appliance Repair Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Expert tips, maintenance guides, and professional insights to help you keep your appliances running efficiently and extend their lifespan.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.id} className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                  <CardTitle className="text-xl line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/blog/${post.id}`}>
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-muted rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Professional Help?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              While our blog provides valuable DIY tips and maintenance advice, some appliance issues require professional expertise. 
              Our certified technicians are ready to help with all your appliance repair needs in Naples and surrounding areas.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/#contact">Schedule Service</Link>
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