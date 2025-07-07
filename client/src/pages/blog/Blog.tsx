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
  },
  {
    id: 'dishwasher-not-draining-most-common-causes-naples-homes',
    title: 'Why Your Dishwasher Won\'t Drain: Most Common Causes in Naples Homes',
    excerpt: 'Discover the most frequent dishwasher drainage problems Naples homeowners face and learn expert solutions.',
    content: '',
    author: 'Naples Appliance Repair Team',
    date: '2025-01-01',
    readTime: '10 min read',
    category: 'Troubleshooting',
    tags: ['dishwasher', 'drainage', 'troubleshooting', 'naples']
  },
  {
    id: 'how-often-service-major-appliances-naples',
    title: 'How Often Should You Service Major Appliances in Naples?',
    excerpt: 'Learn the optimal maintenance schedule for your home appliances in Southwest Florida\'s challenging climate.',
    content: '',
    author: 'Naples Appliance Repair Team',
    date: '2024-12-30',
    readTime: '9 min read',
    category: 'Maintenance',
    tags: ['maintenance', 'schedule', 'appliances', 'naples']
  },
  {
    id: 'energy-efficient-appliance-upgrades-naples-homeowners-save',
    title: 'Energy-Efficient Appliance Upgrades: How Naples Homeowners Save',
    excerpt: 'Comprehensive analysis of energy-efficient appliance benefits and cost savings for Southwest Florida homes.',
    content: '',
    author: 'Naples Appliance Repair Team',
    date: '2024-12-29',
    readTime: '11 min read',
    category: 'Energy Efficiency',
    tags: ['energy', 'upgrades', 'savings', 'naples']
  },
  {
    id: 'why-diy-appliance-repair-fails-naples-pros-know',
    title: 'Why DIY Appliance Repair Often Fails: What Naples Pros Know',
    excerpt: 'Understanding why professional appliance repair is often more cost-effective than DIY attempts.',
    content: '',
    author: 'Naples Appliance Repair Team',
    date: '2024-12-28',
    readTime: '8 min read',
    category: 'Professional Tips',
    tags: ['diy', 'professional', 'repair', 'naples']
  },
  {
    id: 'avoiding-mold-florida-appliances-washer-dishwasher-more',
    title: 'Avoiding Mold in Florida Appliances: Washer, Dishwasher & More',
    excerpt: 'Expert strategies to prevent mold growth in appliances during Florida\'s humid climate.',
    content: '',
    author: 'Naples Appliance Repair Team',
    date: '2024-12-27',
    readTime: '12 min read',
    category: 'Maintenance',
    tags: ['mold', 'humidity', 'florida', 'prevention']
  },
  {
    id: 'back-to-school-easy-appliance-maintenance-busy-naples-families',
    title: 'Back-to-School: Easy Appliance Maintenance for Busy Naples Families',
    excerpt: 'Simple maintenance routines to keep your appliances running smoothly during the busy school season.',
    content: '',
    author: 'Naples Appliance Repair Team',
    date: '2024-12-26',
    readTime: '9 min read',
    category: 'Seasonal Tips',
    tags: ['maintenance', 'family', 'school', 'naples']
  },
  {
    id: 'appliance-lifespans-when-time-replace-vs-repair',
    title: 'Appliance Lifespans: When It\'s Time to Replace vs. Repair',
    excerpt: 'Expert guidance on making the repair vs. replacement decision for major home appliances.',
    content: '',
    author: 'Naples Appliance Repair Team',
    date: '2024-12-25',
    readTime: '10 min read',
    category: 'Decision Guide',
    tags: ['lifespan', 'replacement', 'repair', 'guidance']
  },
  {
    id: 'what-do-when-naples-dryer-stops-heating',
    title: 'What to Do When Your Naples Dryer Stops Heating',
    excerpt: 'Comprehensive troubleshooting guide for dryer heating problems in Southwest Florida homes.',
    content: '',
    author: 'Naples Appliance Repair Team',
    date: '2024-12-24',
    readTime: '11 min read',
    category: 'Troubleshooting',
    tags: ['dryer', 'heating', 'troubleshooting', 'naples']
  },
  {
    id: 'garbage-disposal-troubleshooting-common-naples-issues',
    title: 'Garbage Disposal Troubleshooting: Common Naples Issues',
    excerpt: 'Learn to diagnose and resolve the most frequent garbage disposal problems in Southwest Florida.',
    content: '',
    author: 'Naples Appliance Repair Team',
    date: '2024-12-23',
    readTime: '8 min read',
    category: 'Troubleshooting',
    tags: ['garbage disposal', 'troubleshooting', 'naples', 'kitchen']
  },
  {
    id: 'hurricane-prep-protecting-appliances-naples',
    title: 'Hurricane Prep: Protecting Your Appliances in Naples',
    excerpt: 'Essential guide to protecting appliances during hurricane season in Naples, FL.',
    content: '',
    author: 'Naples Appliance Repair Team',
    date: '2024-12-22',
    readTime: '12 min read',
    category: 'Storm Protection',
    tags: ['hurricane', 'protection', 'naples', 'preparation']
  },
  {
    id: 'appliance-warranties-what-naples-residents-need-know',
    title: 'Appliance Warranties: What Naples Residents Need to Know',
    excerpt: 'Complete guide to appliance warranties in Naples, FL and what\'s covered in Southwest Florida.',
    content: '',
    author: 'Naples Appliance Repair Team',
    date: '2024-12-21',
    readTime: '11 min read',
    category: 'Consumer Guide',
    tags: ['warranties', 'coverage', 'naples', 'protection']
  },
  {
    id: 'why-not-ignore-strange-noises-appliances',
    title: 'Why You Shouldn\'t Ignore Strange Noises from Appliances',
    excerpt: 'Learn what strange appliance noises mean and when to call for repair in Naples, FL.',
    content: '',
    author: 'Naples Appliance Repair Team',
    date: '2024-12-20',
    readTime: '9 min read',
    category: 'Troubleshooting',
    tags: ['noises', 'diagnosis', 'appliances', 'warning signs']
  },
  {
    id: 'most-common-oven-problems-naples-homes',
    title: 'The Most Common Oven Problems in Naples Homes',
    excerpt: 'Learn about the most frequent oven issues Naples homeowners face and how to troubleshoot them.',
    content: '',
    author: 'Naples Appliance Repair Team',
    date: '2024-12-19',
    readTime: '10 min read',
    category: 'Troubleshooting',
    tags: ['oven', 'problems', 'naples', 'troubleshooting']
  },
  {
    id: 'preparing-kitchen-appliances-holiday-cooking',
    title: 'Preparing Your Kitchen Appliances for Holiday Cooking',
    excerpt: 'Get your Naples kitchen ready for holiday entertaining with essential appliance prep tips.',
    content: '',
    author: 'Naples Appliance Repair Team',
    date: '2024-12-18',
    readTime: '11 min read',
    category: 'Holiday Tips',
    tags: ['holiday', 'cooking', 'preparation', 'kitchen']
  },
  {
    id: 'how-get-most-out-naples-dishwasher',
    title: 'How to Get the Most Out of Your Naples Dishwasher',
    excerpt: 'Maximize your dishwasher\'s performance in Naples, FL with expert tips for hard water and maintenance.',
    content: '',
    author: 'Naples Appliance Repair Team',
    date: '2024-12-17',
    readTime: '9 min read',
    category: 'Optimization',
    tags: ['dishwasher', 'performance', 'naples', 'tips']
  },
  {
    id: 'smart-appliances-worth-it-southwest-florida',
    title: 'Smart Appliances: Are They Worth It in Southwest Florida?',
    excerpt: 'Evaluate smart appliance benefits for Naples, FL homes and whether connected features make sense.',
    content: '',
    author: 'Naples Appliance Repair Team',
    date: '2024-12-16',
    readTime: '12 min read',
    category: 'Technology',
    tags: ['smart appliances', 'technology', 'naples', 'evaluation']
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