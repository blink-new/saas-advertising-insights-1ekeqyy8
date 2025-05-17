import { useState } from "react";
import { ScrollArea } from "../components/ui/scroll-area";
import { Separator } from "../components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import {
  Search,
  Globe,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Mail,
  CreditCard,
  Send,
  MonitorSmartphone,
  Megaphone,
  ChevronRight,
  Star,
  CheckCircle2,
  BarChart,
  Clock,
  Users,
  TrendingUp,
  HelpCircle,
  BookOpen,
  Bookmark,
  PlayCircle,
  FileText,
} from "lucide-react";

// Channel data
const channels = [
  {
    id: "search",
    name: "Search Engine Marketing",
    icon: <Globe className="w-5 h-5 text-blue-500" />,
    description: "Drive high-intent traffic through paid search campaigns.",
    effectiveness: 88,
    difficulty: "Medium",
    cost: "High",
    timeToResults: "Short",
    bestFor: ["B2B SaaS", "B2C SaaS", "Enterprise Solutions"],
    platforms: [
      { name: "Google Ads", icon: <Search className="w-4 h-4" /> },
      { name: "Bing Ads", icon: <Search className="w-4 h-4" /> },
    ],
    sections: [
      {
        title: "Strategy Overview",
        content: `Search Engine Marketing (SEM) involves bidding on keywords that your target audience is searching for. It's one of the most effective channels for SaaS products because it captures high-intent users actively looking for solutions.

When implemented correctly, SEM can deliver immediate results with highly qualified traffic. The key to success is understanding search intent, creating compelling ad copy, and optimizing landing pages for conversion.

This guide will walk you through creating and optimizing Google Ads campaigns specifically for SaaS products, focusing on maximizing your return on ad spend (ROAS).`,
      },
      {
        title: "Step-by-Step Implementation",
        content: `1. **Keyword Research**: Identify high-intent keywords relevant to your SaaS. Focus on terms with commercial intent like "best [product category] software," "[product category] tool pricing," etc.

2. **Campaign Structure**: Create separate campaigns for different product features or customer segments. Use a mix of search, display, and remarketing campaigns.

3. **Ad Copy Creation**: Write compelling headlines and descriptions that highlight your unique value proposition. Include pricing information for higher quality leads.

4. **Landing Page Optimization**: Create dedicated landing pages for each campaign that directly address the searcher's intent and contain clear CTAs.

5. **Bid Management**: Start with manual CPC bidding and transition to automated bidding strategies once you have enough conversion data.

6. **Conversion Tracking**: Set up proper tracking for sign-ups, trials, demos, and purchases to measure ROAS accurately.

7. **Ongoing Optimization**: Regularly review search terms, adjust negative keywords, test ad variations, and optimize bidding strategies.`,
      },
      {
        title: "SaaS-Specific Best Practices",
        content: `- **Focus on Qualification**: Use ad copy and landing pages that qualify prospects to reduce low-quality leads.

- **Highlight Time-to-Value**: Emphasize how quickly users can implement and see results from your solution.

- **Address Pain Points**: Identify the specific problems your target audience faces and address them directly in your ads.

- **Showcase Social Proof**: Include customer numbers, testimonials, or recognizable client logos in your landing pages.

- **Offer the Right CTA**: Match your call-to-action to your sales cycle - free trials for shorter sales cycles, demos for more complex products.

- **Leverage Extensions**: Use all relevant ad extensions to increase visibility and provide additional information.`,
      },
      {
        title: "Performance Measurement",
        content: `Track these key metrics to evaluate your SEM performance:

- **Click-Through Rate (CTR)**: Industry average for SaaS is 3-5%
- **Conversion Rate**: Typically 2-5% for SaaS sign-ups/trials
- **Cost Per Acquisition (CPA)**: Should align with your customer lifetime value
- **Quality Score**: Aim for 7+ on your main keywords
- **Impression Share**: Strive for at least 70% on branded terms

Use Google Analytics alongside Google Ads to track user behavior after the click. Pay special attention to metrics like time on site, pages per session, and returning visitors.`,
      },
    ],
    tips: [
      "Bid on competitor keywords, but ensure your landing page clearly differentiates your solution",
      "Create custom landing pages for each major keyword group",
      "Use responsive search ads to automatically test different headline and description combinations",
      "Test different CTAs (Free Trial vs. Demo vs. Consultation) to see what converts best",
      "Add negative keywords regularly to prevent wasted spend"
    ],
    tools: [
      { name: "SEMrush", purpose: "Keyword research and competitor analysis" },
      { name: "Unbounce", purpose: "Landing page creation and A/B testing" },
      { name: "Google Ads Editor", purpose: "Bulk campaign management" },
      { name: "Google Analytics", purpose: "Post-click behavior analysis" },
    ],
    videos: [
      { title: "Google Ads for SaaS - Full Tutorial", url: "#" },
      { title: "Landing Page Optimization for Higher Conversions", url: "#" },
    ],
  },
  {
    id: "social",
    name: "Social Media Advertising",
    icon: <Facebook className="w-5 h-5 text-blue-600" />,
    description: "Target specific audiences based on demographics and behavior.",
    effectiveness: 76,
    difficulty: "Medium",
    cost: "Medium",
    timeToResults: "Medium",
    bestFor: ["B2C SaaS", "B2B SaaS with visual products", "Mobile apps"],
    platforms: [
      { name: "Facebook", icon: <Facebook className="w-4 h-4" /> },
      { name: "Instagram", icon: <Instagram className="w-4 h-4" /> },
      { name: "LinkedIn", icon: <Linkedin className="w-4 h-4" /> },
      { name: "Twitter", icon: <Twitter className="w-4 h-4" /> },
    ],
    sections: [
      {
        title: "Strategy Overview",
        content: `Social media advertising allows SaaS companies to target specific audiences based on demographics, interests, and behaviors. Each platform offers unique targeting capabilities and ad formats that can be leveraged for different parts of the marketing funnel.

LinkedIn is particularly effective for B2B SaaS, while Facebook and Instagram work well for B2C or products with strong visual elements. Twitter can be excellent for reaching tech-savvy audiences and participating in industry conversations.

This guide will help you select the right platforms for your SaaS product and implement effective campaigns that drive awareness, lead generation, and conversions.`,
      },
      {
        title: "Platform Selection Guide",
        content: `**LinkedIn**: Best for B2B SaaS targeting by job title, company size, industry, and seniority. Use for lead generation, thought leadership, and direct response campaigns.

**Facebook/Instagram**: Excellent for B2C SaaS and remarketing. Leverage detailed interest and behavior targeting, custom audiences, and lookalike audiences.

**Twitter**: Good for brand awareness, product launches, and engaging with tech communities. Works well for SaaS tools targeting developers or tech enthusiasts.

**YouTube**: Ideal for demonstration-heavy SaaS products that benefit from visual tutorials or explainer videos.

For most SaaS companies, a multi-platform approach works best, with different content strategies for each channel based on audience behavior and platform strengths.`,
      },
      {
        title: "Campaign Implementation Steps",
        content: `1. **Audience Research**: Develop detailed customer personas and map them to targeting options on each platform.

2. **Content Strategy**: Create platform-specific content that aligns with how users engage on each network.

3. **Campaign Setup**: Build campaigns with clear objectives (awareness, consideration, conversion) and appropriate ad formats.

4. **Targeting Configuration**: Set up detailed targeting parameters, create custom audiences from your website visitors and email lists.

5. **Ad Creative Development**: Design visually appealing ads with clear value propositions and CTAs.

6. **Landing Page Alignment**: Ensure landing pages continue the conversation started in your ad with consistent messaging.

7. **Measurement Setup**: Install proper tracking pixels and event triggers for accurate performance measurement.

8. **Testing Plan**: Develop a structured approach to test different audiences, creative elements, and offers.`,
      },
      {
        title: "Optimization Strategies",
        content: `- **Audience Refinement**: Regularly analyze performance by audience segment and refine targeting based on results.

- **Creative Rotation**: Refresh ad creative every 2-4 weeks to combat ad fatigue.

- **Budget Allocation**: Shift budget to top-performing platforms, campaigns, and ad sets.

- **Funnel Optimization**: Create specific campaigns for awareness, consideration, and decision stages.

- **Retargeting**: Implement multi-touchpoint retargeting strategies with different messages based on previous site behavior.

- **A/B Testing**: Continuously test headlines, images, CTAs, and landing pages to improve performance.

- **Bid Strategy**: Adjust bidding based on customer lifetime value and conversion likelihood.`,
      },
    ],
    tips: [
      "Use LinkedIn Lead Gen forms for B2B SaaS to reduce friction in the conversion process",
      "Create separate campaigns for cold audiences and warm/retargeting audiences",
      "Test video content against static images - video often outperforms for complex products",
      "Use social proof elements (testimonials, user counts) in ad creative",
      "Create lookalike audiences based on your highest-value customers, not just any users"
    ],
    tools: [
      { name: "Canva", purpose: "Ad creative design" },
      { name: "AdEspresso", purpose: "Cross-platform campaign management" },
      { name: "Hootsuite", purpose: "Social media scheduling and monitoring" },
      { name: "Facebook Audience Insights", purpose: "Audience research and analysis" },
    ],
    videos: [
      { title: "LinkedIn Advertising for B2B SaaS", url: "#" },
      { title: "Facebook Custom Audiences Masterclass", url: "#" },
    ],
  },
  {
    id: "content",
    name: "Content Marketing",
    icon: <BookOpen className="w-5 h-5 text-emerald-500" />,
    description: "Build authority and drive organic traffic with valuable content.",
    effectiveness: 82,
    difficulty: "Hard",
    cost: "Low",
    timeToResults: "Long",
    bestFor: ["Enterprise SaaS", "Complex B2B solutions", "High LTV products"],
    platforms: [
      { name: "Blog", icon: <FileText className="w-4 h-4" /> },
      { name: "YouTube", icon: <Youtube className="w-4 h-4" /> },
      { name: "Podcasts", icon: <Megaphone className="w-4 h-4" /> },
    ],
    sections: [
      {
        title: "Strategy Overview",
        content: `Content marketing for SaaS involves creating and distributing valuable, relevant content to attract and engage a clearly defined audience. When executed effectively, it positions your company as an authority in your niche and drives organic traffic and leads over time.

Unlike paid advertising, content marketing has a compounding return on investment, with assets continuing to drive traffic and conversions long after publication. This makes it particularly valuable for SaaS companies with longer sales cycles and higher customer lifetime values.

This guide will help you build a comprehensive content strategy aligned with different stages of the buyer's journey, focusing on formats and topics that resonate with SaaS audiences.`,
      },
      {
        title: "Content Strategy Development",
        content: `1. **Audience Research**: Identify your target personas, their pain points, questions, and content consumption preferences.

2. **Content Mapping**: Create content aligned with each stage of the buyer's journey:
   - Awareness: Educational blog posts, infographics, and videos about industry challenges
   - Consideration: Comparison guides, case studies, and webinars about potential solutions
   - Decision: Product demos, free trials, and customer testimonials

3. **Topic Research**: Use tools like Ahrefs, SEMrush, or BuzzSumo to identify high-potential topics with search volume and engagement potential.

4. **Content Calendar**: Develop a publishing schedule that ensures consistent content production across platforms.

5. **Distribution Plan**: Define how you'll promote each content piece across owned, earned, and paid channels.

6. **Conversion Strategy**: Plan how each content piece will move readers toward the next stage in their journey.`,
      },
      {
        title: "High-Performing Content Types for SaaS",
        content: `**Blog Articles**:
- Ultimate guides to solving industry problems
- Product comparisons and alternatives posts
- How-to tutorials for common use cases
- Industry trends and data-driven insights
- Customer success stories and case studies

**Video Content**:
- Product demonstrations and walkthroughs
- Expert interviews and thought leadership
- Animated explainer videos
- Customer testimonials
- Webinar recordings

**Interactive Content**:
- ROI calculators specific to your solution
- Interactive product demos
- Assessment tools and quizzes
- Decision-making frameworks

**Lead Magnets**:
- Industry benchmark reports
- Templates and frameworks
- Checklists and worksheets
- Email courses on specialized topics`,
      },
      {
        title: "Content Promotion and Distribution",
        content: `A comprehensive distribution strategy is essential for content success. For each piece of content, consider these channels:

**Owned Media**:
- Email newsletter segments
- Social media profiles
- Community forums
- Product in-app messaging

**Earned Media**:
- Industry publications and guest posting
- Podcast interviews
- PR outreach for newsworthy content
- Community participation (Reddit, Slack groups, etc.)

**Paid Media**:
- Promoted social posts
- Paid content discovery platforms (Outbrain, Taboola)
- Native advertising
- Retargeting campaigns for content engagement

Implement a systematic promotion process that includes pre-publication outreach, launch day activities, and ongoing promotion efforts.`,
      },
    ],
    tips: [
      "Create cornerstone content pieces that can be repurposed across multiple formats and channels",
      "Focus on solving specific problems rather than overtly selling your product",
      "Use data from your own product to create unique, authoritative content",
      "Implement content upgrades within blog posts to capture leads",
      "Refresh and update top-performing content regularly to maintain relevance and rankings"
    ],
    tools: [
      { name: "Ahrefs", purpose: "SEO research and content planning" },
      { name: "BuzzSumo", purpose: "Content performance analysis" },
      { name: "Trello", purpose: "Content calendar management" },
      { name: "Grammarly", purpose: "Content editing and improvement" },
    ],
    videos: [
      { title: "Building a SaaS Content Marketing Machine", url: "#" },
      { title: "Content Distribution Strategies That Drive Traffic", url: "#" },
    ],
  },
  {
    id: "email",
    name: "Email Marketing",
    icon: <Mail className="w-5 h-5 text-amber-500" />,
    description: "Nurture leads and retain customers with targeted messaging.",
    effectiveness: 90,
    difficulty: "Medium",
    cost: "Low",
    timeToResults: "Medium",
    bestFor: ["Customer retention", "Lead nurturing", "User onboarding"],
    platforms: [
      { name: "Mailchimp", icon: <Mail className="w-4 h-4" /> },
      { name: "HubSpot", icon: <Mail className="w-4 h-4" /> },
      { name: "Customer.io", icon: <Mail className="w-4 h-4" /> },
    ],
    sections: [
      {
        title: "Strategy Overview",
        content: `Email marketing remains one of the most effective channels for SaaS companies, with an average ROI of 36:1. It's particularly valuable for nurturing leads through longer sales cycles and driving product adoption among existing users.

Unlike other channels, email gives you direct access to your audience without algorithm changes or platform intermediaries. For SaaS businesses, email serves multiple critical functions: lead nurturing, user onboarding, feature announcements, retention, and expansion revenue generation.

This guide will help you build automated email sequences for different audience segments and use cases, focusing on personalization and behavioral triggers to maximize engagement and conversion.`,
      },
      {
        title: "Essential Email Sequences for SaaS",
        content: `**1. Lead Nurture Sequence**
Purpose: Convert leads into trial users or customers
Trigger: New lead form submission
Content: Educational content, social proof, objection handling, and call-to-action
Length: 5-7 emails over 14-21 days

**2. Trial Onboarding Sequence**
Purpose: Help trial users experience value and convert to paid
Trigger: Free trial signup
Content: Getting started guides, feature highlights, use cases, success stories
Length: 7-10 emails over trial period (typically 14-30 days)

**3. New Customer Onboarding**
Purpose: Drive initial product adoption and success
Trigger: New paid account creation
Content: Setup instructions, quick wins, training resources, support options
Length: 5-7 emails over first 14 days

**4. Engagement/Retention Sequence**
Purpose: Maintain active usage and prevent churn
Trigger: Usage patterns (both positive and concerning)
Content: Feature tips, success stories, advanced use cases, feedback requests
Length: Ongoing based on behavior

**5. Expansion Revenue Sequence**
Purpose: Upgrade users to higher tiers or add-ons
Trigger: Usage thresholds, feature interactions, or time-based
Content: Feature limitations, upgrade benefits, ROI examples
Length: 3-5 emails when upgrade opportunity identified`,
      },
      {
        title: "Segmentation and Personalization",
        content: `Effective email marketing requires sending the right message to the right person at the right time. Implement these segmentation strategies:

**Behavioral Segmentation**:
- Product usage patterns (power users vs. at-risk)
- Feature engagement (what features they use most)
- Lifecycle stage (trial, new customer, established user)
- Engagement level with previous emails

**Demographic Segmentation**:
- Company size or type
- Job role or department
- Industry vertical
- Geographic location

**Custom Fields and Attributes**:
- Specific pain points or use cases
- Goals identified during onboarding
- Preference center selections
- NPS or satisfaction scores

Use dynamic content blocks within email templates to personalize messaging based on these segments. Show different content, examples, or CTAs depending on the recipient's attributes and behavior.`,
      },
      {
        title: "Optimization and Testing",
        content: `Continuously improve your email performance through structured testing and optimization:

**Subject Line Testing**:
- Length (short vs. long)
- Personalization elements
- Question vs. statement format
- Benefit-focused vs. curiosity-driven

**Send Time Optimization**:
- Day of week analysis
- Time of day testing
- Frequency testing
- Behavioral timing (triggered by actions)

**Content and Design Testing**:
- Copy length and tone
- CTA button design and placement
- Image vs. no image
- Social proof placement

**Campaign Structure Testing**:
- Sequence length and timing
- Multi-touch vs. single email approaches
- Content mix within sequences

Measure results using email engagement metrics (open rate, click rate) but focus primarily on conversion metrics (trials, demos, purchases, upgrades) to determine true effectiveness.`,
      },
    ],
    tips: [
      "Segment users based on their in-app behavior for highly relevant messaging",
      "Use plain-text emails from founders/executives for high-value touchpoints",
      "Include a single, clear call-to-action in each email",
      "Send behavior-triggered emails based on feature usage or lack thereof",
      "Test different email frequencies to find the optimal cadence for your audience"
    ],
    tools: [
      { name: "Customer.io", purpose: "Behavior-based email automation" },
      { name: "Litmus", purpose: "Email testing and analytics" },
      { name: "Clearbit", purpose: "Data enrichment for personalization" },
      { name: "RightMessage", purpose: "Dynamic content personalization" },
    ],
    videos: [
      { title: "SaaS Email Marketing Masterclass", url: "#" },
      { title: "Building Effective Drip Campaigns", url: "#" },
    ],
  },
  {
    id: "ppc",
    name: "Display & Retargeting",
    icon: <MonitorSmartphone className="w-5 h-5 text-purple-500" />,
    description: "Increase brand visibility and re-engage website visitors.",
    effectiveness: 65,
    difficulty: "Medium",
    cost: "Medium",
    timeToResults: "Short",
    bestFor: ["Brand awareness", "Retargeting website visitors", "Competitive targeting"],
    platforms: [
      { name: "Google Display", icon: <Megaphone className="w-4 h-4" /> },
      { name: "AdRoll", icon: <MonitorSmartphone className="w-4 h-4" /> },
      { name: "Facebook Retargeting", icon: <Facebook className="w-4 h-4" /> },
    ],
    sections: [
      {
        title: "Strategy Overview",
        content: `Display advertising and retargeting allow SaaS companies to increase brand visibility and re-engage potential customers who have shown interest but not converted. While display advertising generally has lower direct conversion rates than search, it plays a crucial role in building brand awareness and supporting other marketing channels.

Retargeting (also called remarketing) is particularly valuable for SaaS, with conversion rates 3-10x higher than standard display advertising. By showing targeted ads to people who have already visited your website, you can bring them back to complete sign-ups, trials, or purchases.

This guide covers both prospecting display campaigns for new audience acquisition and retargeting campaigns for conversion optimization.`,
      },
      {
        title: "Display Campaign Strategy",
        content: `**Audience Targeting Options**:
- Interest-based targeting (industries, roles, topics)
- Contextual targeting (relevant websites and content)
- Similar audiences based on your existing customers
- In-market audiences actively researching solutions
- Custom intent audiences (built around keywords)

**Campaign Types**:
- Awareness campaigns: Build brand recognition in your target market
- Consideration campaigns: Highlight specific features and benefits
- Competitive campaigns: Target users researching competitors
- Content promotion: Drive traffic to valuable resources

**Ad Format Selection**:
- Responsive display ads (automatically adjust to available space)
- Image ads (static banners in standard sizes)
- Video ads (animated explanations of your product)
- Native ads (match the look and feel of publisher sites)

Create separate campaigns for different objectives and audience segments to better control messaging and bidding strategies.`,
      },
      {
        title: "Retargeting Implementation",
        content: `**Audience Segmentation**:
Create separate retargeting audiences based on:
- Pages visited (product pages, pricing, blog)
- Actions taken (trial started but not completed, demo requested)
- Time since last visit (1-3 days, 4-7 days, 8-14 days, etc.)
- Frequency of visits (single vs. multiple interactions)

**Sequential Messaging**:
Develop a progression of ad content that changes based on:
- Initial touchpoint (what brought them to your site)
- Depth of engagement (how much they've explored)
- Specific objections to address (based on exit pages)
- Time elapsed since last visit

**Frequency Management**:
- Set appropriate frequency caps (typically 3-5 impressions per day)
- Decrease frequency for longer timeframes since visit
- Increase frequency near decision points (end of trial, etc.)

**Exclusion Strategy**:
- Exclude converted customers from acquisition campaigns
- Remove users who have completed specific actions
- Implement burn pixels to stop showing ads after conversion`,
      },
      {
        title: "Creative Best Practices",
        content: `**Effective Ad Elements**:
- Clear, benefit-focused headlines
- Strong value proposition in main copy
- Recognizable brand elements for consistency
- High-contrast CTA buttons
- Social proof indicators when possible

**SaaS-Specific Approaches**:
- Show the product interface for complex tools
- Visualize results and outcomes, not just features
- Use animation to demonstrate key workflows
- Include testimonials from recognizable companies
- Highlight time-to-value and implementation ease

**Testing Framework**:
- Test value propositions against each other
- Compare feature-focused vs. outcome-focused messaging
- Try different visual approaches (product screenshots, people using product, abstract)
- Test CTA variations (Free Trial vs. See Demo vs. Learn More)

Refresh creative regularly (every 4-6 weeks) to combat ad fatigue and keep messaging aligned with seasonal trends and product updates.`,
      },
    ],
    tips: [
      "Create separate retargeting campaigns based on which pages visitors viewed",
      "Use frequency capping to prevent ad fatigue",
      "Include countdown timers in retargeting ads for limited-time offers",
      "Test different levels of product detail in your ads",
      "Develop a sequential messaging strategy that changes based on previous engagement"
    ],
    tools: [
      { name: "AdRoll", purpose: "Cross-platform retargeting" },
      { name: "Google Display & Video 360", purpose: "Advanced display campaign management" },
      { name: "Bannersnack", purpose: "Banner ad creation" },
      { name: "Unbounce", purpose: "Landing page creation and testing" },
    ],
    videos: [
      { title: "Retargeting Strategies for SaaS", url: "#" },
      { title: "Display Ad Design Best Practices", url: "#" },
    ],
  },
];

export default function ChannelGuides() {
  const [selectedChannel, setSelectedChannel] = useState(channels[0]);
  const [selectedSection, setSelectedSection] = useState(0);
  
  return (
    <div className="animate-fade-in">
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Channel Guides</h1>
        <p className="text-muted-foreground">
          Detailed walkthroughs for each marketing channel to help you maximize performance.
        </p>
      </div>
      
      <div className="flex flex-col space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6">
        {/* Channel Sidebar */}
        <Card className="lg:w-64">
          <CardHeader className="py-4">
            <CardTitle className="text-lg">Marketing Channels</CardTitle>
          </CardHeader>
          <Separator />
          <ScrollArea className="h-[60vh]">
            <div className="space-y-1 p-2">
              {channels.map((channel) => (
                <Button
                  key={channel.id}
                  variant={selectedChannel.id === channel.id ? "secondary" : "ghost"}
                  className="w-full justify-start gap-3"
                  onClick={() => {
                    setSelectedChannel(channel);
                    setSelectedSection(0);
                  }}
                >
                  <div>{channel.icon}</div>
                  <span className="text-sm">{channel.name}</span>
                </Button>
              ))}
            </div>
          </ScrollArea>
        </Card>
        
        {/* Main Content */}
        <div className="flex-1 space-y-6">
          {/* Channel Header */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-full">
                  {selectedChannel.icon}
                </div>
                <div>
                  <CardTitle>{selectedChannel.name}</CardTitle>
                  <CardDescription>{selectedChannel.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Effectiveness</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Progress value={selectedChannel.effectiveness} className="h-2" />
                    <span className="text-sm font-medium">{selectedChannel.effectiveness}%</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Difficulty</p>
                  <p className="font-medium">{selectedChannel.difficulty}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Cost Level</p>
                  <p className="font-medium">{selectedChannel.cost}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Time to Results</p>
                  <p className="font-medium">{selectedChannel.timeToResults}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground mb-1">Best For</p>
                <div className="flex flex-wrap gap-2">
                  {selectedChannel.bestFor.map((item, index) => (
                    <Badge key={index} variant="secondary">{item}</Badge>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground mb-1">Platforms</p>
                <div className="flex flex-wrap gap-2">
                  {selectedChannel.platforms.map((platform, index) => (
                    <div key={index} className="inline-flex items-center gap-1.5 py-1 px-2 bg-secondary/50 rounded-md text-sm">
                      {platform.icon}
                      <span>{platform.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Channel Content */}
          <Card>
            <CardHeader className="pb-0">
              <Tabs 
                defaultValue="0" 
                value={selectedSection.toString()} 
                onValueChange={(v) => setSelectedSection(parseInt(v))}
                className="w-full"
              >
                <TabsList className="w-full justify-start">
                  {selectedChannel.sections.map((section, index) => (
                    <TabsTrigger 
                      key={index} 
                      value={index.toString()}
                      className="flex-1 max-w-[150px]"
                    >
                      {section.title.split(':')[0]}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </CardHeader>
            <CardContent className="pt-6">
              {selectedChannel.sections.map((section, index) => (
                <div key={index} className={index === selectedSection ? "block" : "hidden"}>
                  <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                  <div className="prose dark:prose-invert max-w-none">
                    {section.content.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="mb-4 text-muted-foreground whitespace-pre-line">{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
              
              {/* Navigation buttons */}
              <div className="flex justify-between mt-6">
                <Button
                  variant="outline"
                  onClick={() => setSelectedSection(Math.max(0, selectedSection - 1))}
                  disabled={selectedSection === 0}
                  className="gap-2"
                >
                  Previous Section
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setSelectedSection(Math.min(selectedChannel.sections.length - 1, selectedSection + 1))}
                  disabled={selectedSection === selectedChannel.sections.length - 1}
                  className="gap-2"
                >
                  Next Section
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Tips and Resources */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Expert Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-amber-500" />
                  Expert Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {selectedChannel.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            {/* Recommended Tools */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="h-5 w-5 text-blue-500" />
                  Recommended Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {selectedChannel.tools.map((tool, index) => (
                    <li key={index} className="flex flex-col">
                      <div className="font-medium">{tool.name}</div>
                      <span className="text-xs text-muted-foreground">{tool.purpose}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          
          {/* Video Resources */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PlayCircle className="h-5 w-5 text-red-500" />
                Video Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedChannel.videos.map((video, index) => (
                  <Button key={index} variant="outline" className="justify-start gap-3">
                    <PlayCircle className="h-5 w-5 text-red-500" />
                    <span className="text-sm truncate">{video.title}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}