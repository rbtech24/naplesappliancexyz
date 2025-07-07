import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { ScrollLink } from '@/utils/scrollToTop';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

const featuredBlogPosts: BlogPost[] = [
  {
    id: 'ultimate-guide-extending-appliance-lifespan-southwest-florida',
    title: 'The Ultimate Guide to Extending Your Appliance Lifespan in Southwest Florida',
    excerpt: 'Learn essential maintenance tips and techniques to maximize the life of your home appliances in Naples humid climate.',
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
    author: 'Naples Appliance Repair Team',
    date: '2025-01-05',
    readTime: '12 min read',
    category: 'Climate Tips',
    tags: ['refrigerator', 'heat', 'naples', 'efficiency']
  }
];

const BlogSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Latest Appliance Tips & Insights</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay informed with expert advice, maintenance tips, and insights specifically for Naples homeowners.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredBlogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow h-full flex flex-col">
              <CardHeader className="flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <User className="h-3 w-3 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <ScrollLink href={`/blog/${post.id}`} className="flex items-center justify-center">
                    Read More <ArrowRight className="h-3 w-3 ml-1" />
                  </ScrollLink>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" asChild>
            <ScrollLink href="/blog" className="flex items-center">
              View All Articles <ArrowRight className="h-4 w-4 ml-2" />
            </ScrollLink>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;