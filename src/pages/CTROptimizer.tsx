import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Separator } from "../components/ui/separator";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Label } from "../components/ui/label";
import { Slider } from "../components/ui/slider";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import {
  Sparkles,
  ArrowRight,
  ClipboardCopy,
  ThumbsUp,
  ThumbsDown,
  BarChart,
  MessageSquare,
  Mail,
  Lightbulb,
  Star,
  CheckCircle2,
  XCircle,
  Info,
  RefreshCw,
  Unlock,
  Clock,
  HelpCircle,
  Plus,
  Trash,
  Lock,
} from "lucide-react";

const initialState = {
  adTitle: "",
  adDescription: "",
  targetAudience: "",
  productFeatures: "",
  valueProposition: "",
  currentCTR: "",
  industry: "saas",
  platform: "search",
};

// Sample ad optimization suggestions
const optimizationSuggestions = {
  search: [
    {
      id: 1,
      title: "Add a Specific Number",
      description: "Include specific numbers or statistics in your headline (e.g., \"5x Faster\" or \"Reduce Costs by 30%\").",
      examples: [
        "Poor: Improve Your Marketing Analytics",
        "Better: 3X Your Marketing ROI with Advanced Analytics"
      ],
      impact: "High",
      difficulty: "Easy"
    },
    {
      id: 2,
      title: "Use Power Words",
      description: "Incorporate emotional trigger words that create urgency or excitement.",
      examples: [
        "Poor: Project Management Software",
        "Better: Instantly Streamline Your Team's Workflow"
      ],
      impact: "Medium",
      difficulty: "Easy"
    },
    {
      id: 3,
      title: "Ask a Question",
      description: "Frame your headline as a question that addresses a pain point.",
      examples: [
        "Poor: Customer Support Software",
        "Better: Frustrated with Slow Customer Response Times?"
      ],
      impact: "Medium",
      difficulty: "Easy"
    },
    {
      id: 4,
      title: "Include Price or Discount",
      description: "When appropriate, mention pricing information or special offers.",
      examples: [
        "Poor: Professional Email Marketing",
        "Better: Professional Email Marketing from $19/mo"
      ],
      impact: "High",
      difficulty: "Easy"
    },
    {
      id: 5,
      title: "Use Social Proof",
      description: "Incorporate numbers of users, reviews, or recognizable clients.",
      examples: [
        "Poor: Trusted CRM Platform",
        "Better: CRM Trusted by 10,000+ Companies"
      ],
      impact: "High",
      difficulty: "Medium"
    },
    {
      id: 6,
      title: "Highlight Time Savings",
      description: "Emphasize how your product saves time, which is especially valuable for SaaS.",
      examples: [
        "Poor: Document Management Solution",
        "Better: Reduce Document Processing Time by 75%"
      ],
      impact: "High",
      difficulty: "Medium"
    },
  ],
  social: [
    {
      id: 7,
      title: "Share Customer Success Stories",
      description: "Use real results and testimonials in your ad copy.",
      examples: [
        "Poor: Our Platform Helps Marketers",
        "Better: \"We increased conversions by 156% in 60 days\" - Marketing Director, Acme Inc."
      ],
      impact: "High",
      difficulty: "Medium"
    },
    {
      id: 8,
      title: "Create a Sense of Exclusivity",
      description: "Suggest limited access or special invitation.",
      examples: [
        "Poor: Sign Up for Our Software",
        "Better: Join 500 Companies Using Our Invite-Only Beta"
      ],
      impact: "Medium",
      difficulty: "Easy"
    },
    {
      id: 9,
      title: "Address Objections Directly",
      description: "Tackle common hesitations upfront in your copy.",
      examples: [
        "Poor: Easy-to-Use CRM",
        "Better: CRM That Takes Minutes to Set Up, Not Weeks"
      ],
      impact: "High",
      difficulty: "Medium"
    },
    {
      id: 10,
      title: "Use Platform-Native Features",
      description: "Incorporate hashtags, emojis, or other platform-specific elements.",
      examples: [
        "Poor: New Feature Announcement",
        "Better: 🚀 Just Launched: The Feature You've Been Asking For #ProductivityHack"
      ],
      impact: "Medium",
      difficulty: "Easy"
    },
    {
      id: 11,
      title: "Create a Before/After Scenario",
      description: "Paint a picture of transformation that your product enables.",
      examples: [
        "Poor: Project Management Tool",
        "Better: Before: Missed deadlines & chaos. After: Projects delivered 30% faster."
      ],
      impact: "High",
      difficulty: "Medium"
    },
    {
      id: 12,
      title: "Reference Current Events or Trends",
      description: "Connect your solution to relevant industry trends or challenges.",
      examples: [
        "Poor: Remote Work Software",
        "Better: Making Hybrid Teams 42% More Productive in 2023"
      ],
      impact: "Medium",
      difficulty: "Hard"
    },
  ],
  display: [
    {
      id: 13,
      title: "Focus on the Visual Hierarchy",
      description: "Ensure your value proposition is the most visually prominent element.",
      examples: [
        "Poor: Equal emphasis on all text elements",
        "Better: Largest text: \"30-Day Free Trial\", secondary: benefits"
      ],
      impact: "High",
      difficulty: "Medium"
    },
    {
      id: 14,
      title: "Use Contrasting CTA Button",
      description: "Make your call-to-action button stand out with contrasting colors.",
      examples: [
        "Poor: Blue button on blue background",
        "Better: Orange button on blue background with white text"
      ],
      impact: "High",
      difficulty: "Easy"
    },
    {
      id: 15,
      title: "Show the Product in Action",
      description: "Include screenshots or visuals that demonstrate the product's interface.",
      examples: [
        "Poor: Stock photo of office workers",
        "Better: Screenshot showing key feature with highlights"
      ],
      impact: "Medium",
      difficulty: "Medium"
    },
    {
      id: 16,
      title: "Incorporate Brand Colors Consistently",
      description: "Maintain brand consistency for better recognition and trust.",
      examples: [
        "Poor: Generic colors unrelated to brand",
        "Better: Consistent use of brand colors and typography"
      ],
      impact: "Medium",
      difficulty: "Easy"
    },
    {
      id: 17,
      title: "Use Directional Cues",
      description: "Include visual elements that direct attention to important information.",
      examples: [
        "Poor: Cluttered layout with no visual guidance",
        "Better: Arrow pointing to key benefit or CTA"
      ],
      impact: "Medium",
      difficulty: "Medium"
    },
    {
      id: 18,
      title: "Create a Visual Hierarchy with Size",
      description: "Use size to emphasize the most important information.",
      examples: [
        "Poor: All text the same size",
        "Better: Large headline, medium benefits, small details"
      ],
      impact: "High",
      difficulty: "Easy"
    },
  ],
};

// Sample ad examples by platform and industry
const adExamples = {
  saas: {
    search: [
      {
        title: "Streamline Task Management | 30-Day Free Trial",
        description: "Boost team productivity by 35%. Intuitive interface, real-time collaboration, custom workflows. Start free today!",
        strengths: ["Clear value proposition", "Includes social proof", "Strong CTA"],
        score: 9.2
      },
      {
        title: "Project Management Made Simple | Trusted by 10,000+ Teams",
        description: "Reduce meeting time by 50%. Automate workflows, track progress, and deliver projects on time. Try free for 14 days.",
        strengths: ["Strong social proof", "Quantified benefit", "Addresses pain points"],
        score: 8.8
      }
    ],
    social: [
      {
        title: "\"We cut meeting time in half with this tool\"",
        description: "Struggling with endless meetings and missed deadlines? See how top companies are saving 10+ hours per week with our collaborative platform. Free 30-day trial, no credit card required.",
        strengths: ["Uses testimonial format", "Addresses pain point", "Clear offer"],
        score: 9.5
      },
      {
        title: "Stop wasting time on manual tasks",
        description: "Our automation platform handles the repetitive work so your team can focus on what matters. Companies using our tool report 40% more time for creative work. See a demo →",
        strengths: ["Emotional appeal", "Quantified benefit", "Simple CTA"],
        score: 8.7
      }
    ],
    display: [
      {
        title: "30-Day Free Trial",
        description: "Project Management Reimagined for Remote Teams. Used by 10,000+ companies worldwide.",
        strengths: ["Clean, focused messaging", "Strong social proof", "Clear offer"],
        score: 9.0
      },
      {
        title: "Save 15 Hours Per Week",
        description: "Automate your workflow. Collaborate in real-time. See results instantly.",
        strengths: ["Quantified benefit", "Concise copy", "Three clear benefits"],
        score: 8.9
      }
    ]
  },
  ecommerce: {
    search: [
      {
        title: "70% Off Store Management Software | Free Setup",
        description: "Manage inventory, orders & customers in one place. Used by 5,000+ online stores. Start your 14-day trial today.",
        strengths: ["Strong offer", "Social proof", "Clear functionality"],
        score: 9.3
      },
      {
        title: "Increase Sales by 23% | E-commerce Analytics",
        description: "AI-powered insights to boost conversions. Track customer behavior, optimize product pages, increase AOV. From $29/mo.",
        strengths: ["Specific benefit", "Feature details", "Price information"],
        score: 8.5
      }
    ],
    social: [
      {
        title: "Your competitors are already using this...",
        description: "The secret weapon of 6-figure Shopify stores. Our platform automatically optimizes product pages for maximum conversion. Average ROI: 300% in 60 days.",
        strengths: ["Creates FOMO", "Specific platform mention", "Strong ROI claim"],
        score: 9.1
      },
      {
        title: "Turn abandoned carts into sales",
        description: "78% of shoppers leave without buying. Our recovery system brings back 25% of them automatically. See how it works in a 10-minute demo.",
        strengths: ["Starts with problem statement", "Specific solution", "Low-commitment CTA"],
        score: 8.9
      }
    ],
    display: [
      {
        title: "Double Your Store Revenue",
        description: "AI-powered recommendations that boost average order value by 31%. Used by leading Shopify Plus stores.",
        strengths: ["Bold promise", "Specific benefit", "Targeted to platform"],
        score: 8.7
      },
      {
        title: "Stop Losing Sales to Amazon",
        description: "Our platform helps independent stores compete with giants. 14-day free trial, dedicated support team.",
        strengths: ["Addresses competitive pain", "Clear offer", "Support highlight"],
        score: 8.5
      }
    ]
  },
  finance: {
    search: [
      {
        title: "Financial Reporting in Minutes | Not Hours",
        description: "Automated reports, real-time dashboards, GAAP-compliant. Trusted by 300+ accounting firms. Start free trial.",
        strengths: ["Clear time-saving benefit", "Industry compliance", "Social proof"],
        score: 9.0
      },
      {
        title: "Cut Bookkeeping Time by 75% | From $49/mo",
        description: "AI-powered accounting software with bank integration, automatic categorization & tax-ready reports. For SMBs & startups.",
        strengths: ["Quantified benefit", "Feature highlights", "Target audience"],
        score: 9.2
      }
    ],
    social: [
      {
        title: "\"The CFO tool I wish I had years ago\"",
        description: "Financial forecasting that's actually accurate. Our platform predicted Q3 results within 3% for 87% of our customers. Schedule a personal demo today.",
        strengths: ["Testimonial format", "Specific accuracy claim", "Personal touch CTA"],
        score: 8.8
      },
      {
        title: "Financial compliance doesn't have to be painful",
        description: "Our platform automatically keeps you SOX, GDPR and CCPA compliant. Reduce audit prep time by 60% and avoid costly penalties. Used by 200+ public companies.",
        strengths: ["Pain point focus", "Regulatory specifics", "Dual benefit (time & risk)"],
        score: 9.3
      }
    ],
    display: [
      {
        title: "Financial Insights in Real-Time",
        description: "Dashboard for modern CFOs. Cash flow forecasting, scenario planning, investor-ready reports.",
        strengths: ["Role-specific targeting", "Key feature highlights", "Professional terminology"],
        score: 8.9
      },
      {
        title: "Audits Made Easy",
        description: "Compliance automation trusted by Big 4 accounting firms. 99.8% accuracy rate. See a demo.",
        strengths: ["Pain point solution", "Impressive accuracy stat", "Credibility through association"],
        score: 9.1
      }
    ]
  }
};

// Generate Ad Copy function
const generateAdCopy = (formData: any) => {
  // In a real implementation, this might call an API
  // For demo purposes, we'll just use templates
  
  const platforms = {
    search: {
      titles: [
        `${formData.valueProposition} | Start Free Trial`,
        `${formData.valueProposition} | Trusted by Thousands`,
        `${formData.valueProposition} | From $X/month`,
        `Boost Your ${formData.targetAudience.split(" ")[0]} with ${formData.adTitle}`
      ],
      descriptions: [
        `${formData.productFeatures}. Perfect for ${formData.targetAudience}. Start your free trial today!`,
        `${formData.productFeatures}. Join thousands of satisfied customers. No credit card required.`,
        `${formData.productFeatures}. See why ${formData.targetAudience} trust us. Book a demo now.`,
        `${formData.productFeatures}. Designed specifically for ${formData.targetAudience}. Start free today!`
      ]
    },
    social: {
      titles: [
        `Need to ${formData.valueProposition.toLowerCase()}?`,
        `How ${formData.targetAudience} are achieving ${formData.valueProposition}`,
        `Stop struggling with ${formData.adTitle.toLowerCase()}`,
        `The secret to ${formData.valueProposition.toLowerCase()} for ${formData.targetAudience}`
      ],
      descriptions: [
        `Our solution helps ${formData.targetAudience} to ${formData.valueProposition.toLowerCase()} through ${formData.productFeatures.toLowerCase()}. Try free for 30 days!`,
        `${formData.targetAudience} are using our platform to ${formData.valueProposition.toLowerCase()}. Key features: ${formData.productFeatures}. See how it works!`,
        `Don't waste time on inefficient solutions. Our platform offers ${formData.productFeatures} to help you ${formData.valueProposition.toLowerCase()}. Perfect for ${formData.targetAudience}.`,
        `Looking to ${formData.valueProposition.toLowerCase()}? Our tools provide ${formData.productFeatures} specifically designed for ${formData.targetAudience}. Book a demo!`
      ]
    },
    display: {
      titles: [
        `${formData.valueProposition}`,
        `Designed for ${formData.targetAudience}`,
        `${formData.adTitle}: Simplified`,
        `Achieve ${formData.valueProposition}`
      ],
      descriptions: [
        `${formData.productFeatures}. Try free for 30 days.`,
        `${formData.productFeatures}. The choice of leading ${formData.targetAudience}.`,
        `${formData.productFeatures}. See results immediately.`,
        `${formData.productFeatures}. Start your journey today.`
      ]
    }
  };
  
  const platform = formData.platform || 'search';
  
  // Get random title and description
  const titleIndex = Math.floor(Math.random() * platforms[platform].titles.length);
  const descIndex = Math.floor(Math.random() * platforms[platform].descriptions.length);
  
  return {
    title: platforms[platform].titles[titleIndex],
    description: platforms[platform].descriptions[descIndex]
  };
};

// CTR predictor based on various factors
const predictCTR = (adTitle: string, adDescription: string, platform: string, industry: string) => {
  // This is a simplified demo function
  // In reality, this would use a more sophisticated algorithm or ML model
  
  let score = 5.0; // Base score
  
  // Length factors
  if (adTitle.length > 40) score += 0.5;
  if (adTitle.length > 50) score += 0.3;
  if (adDescription.length > 80) score += 0.4;
  if (adDescription.length > 120) score += 0.3;
  
  // Content factors
  if (adTitle.includes("free") || adDescription.includes("free")) score += 0.7;
  if (adTitle.includes("%") || adDescription.includes("%")) score += 0.5;
  if (adTitle.includes("?") || adDescription.includes("?")) score += 0.4;
  if (adTitle.toLowerCase().includes("how") || adDescription.toLowerCase().includes("how")) score += 0.3;
  if (adTitle.toLowerCase().includes("you") || adDescription.toLowerCase().includes("you")) score += 0.3;
  
  // Platform adjustments
  if (platform === "social") score += 0.2;
  if (platform === "search" && (adTitle.includes("|") || adTitle.includes("-"))) score += 0.4;
  
  // Industry adjustments
  if (industry === "saas") score += 0.3;
  if (industry === "finance") score -= 0.2;
  
  // Cap the score
  score = Math.min(10, score);
  score = Math.max(1, score);
  
  return score.toFixed(1);
};

export default function CTROptimizer() {
  const [formData, setFormData] = useState(initialState);
  const [generatedAds, setGeneratedAds] = useState<any[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState("generator");
  const [activePlatform, setActivePlatform] = useState("search");
  
  const updateFormField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  const handleGenerate = () => {
    setIsGenerating(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const ads = [];
      
      // Generate 3 different ad variations
      for (let i = 0; i < 3; i++) {
        const ad = generateAdCopy(formData);
        const score = predictCTR(ad.title, ad.description, formData.platform, formData.industry);
        
        ads.push({
          id: Date.now() + i,
          title: ad.title,
          description: ad.description,
          platform: formData.platform,
          score,
          isSaved: false
        });
      }
      
      setGeneratedAds(prev => [...ads, ...prev]);
      setIsGenerating(false);
    }, 1500);
  };
  
  const toggleSaved = (id: number) => {
    setGeneratedAds(prev => 
      prev.map(ad => 
        ad.id === id ? { ...ad, isSaved: !ad.isSaved } : ad
      )
    );
  };
  
  const deleteAd = (id: number) => {
    setGeneratedAds(prev => prev.filter(ad => ad.id !== id));
  };
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };
  
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">CTR Optimizer</h1>
        <p className="text-muted-foreground">
          Generate and optimize ad copy that drives higher click-through rates for your SaaS product.
        </p>
      </div>
      
      <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="generator">Ad Generator</TabsTrigger>
          <TabsTrigger value="optimizer">Copy Optimizer</TabsTrigger>
          <TabsTrigger value="examples">High-CTR Examples</TabsTrigger>
        </TabsList>
        
        {/* Ad Generator Tab */}
        <TabsContent value="generator" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-blue-500" />
                SaaS Ad Generator
              </CardTitle>
              <CardDescription>
                Fill in the details about your product to generate optimized ad copy.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="adTitle">Product/Service Name</Label>
                    <Input 
                      id="adTitle" 
                      placeholder="e.g., Project Management Software" 
                      value={formData.adTitle}
                      onChange={(e) => updateFormField("adTitle", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="valueProposition">Main Value Proposition</Label>
                    <Input 
                      id="valueProposition" 
                      placeholder="e.g., Increase Team Productivity" 
                      value={formData.valueProposition}
                      onChange={(e) => updateFormField("valueProposition", e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="targetAudience">Target Audience</Label>
                  <Input 
                    id="targetAudience" 
                    placeholder="e.g., Marketing Teams at SaaS Companies" 
                    value={formData.targetAudience}
                    onChange={(e) => updateFormField("targetAudience", e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="productFeatures">Key Features/Benefits (comma separated)</Label>
                  <Textarea 
                    id="productFeatures" 
                    placeholder="e.g., Real-time collaboration, Automated workflows, Detailed analytics" 
                    rows={3}
                    value={formData.productFeatures}
                    onChange={(e) => updateFormField("productFeatures", e.target.value)}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Industry</Label>
                    <RadioGroup 
                      value={formData.industry} 
                      onValueChange={(value) => updateFormField("industry", value)}
                      className="flex items-center gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="saas" id="saas" />
                        <Label htmlFor="saas">SaaS</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="ecommerce" id="ecommerce" />
                        <Label htmlFor="ecommerce">Ecommerce</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="finance" id="finance" />
                        <Label htmlFor="finance">Finance</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Ad Platform</Label>
                    <RadioGroup 
                      value={formData.platform} 
                      onValueChange={(value) => updateFormField("platform", value)}
                      className="flex items-center gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="search" id="search" />
                        <Label htmlFor="search">Search</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="social" id="social" />
                        <Label htmlFor="social">Social</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="display" id="display" />
                        <Label htmlFor="display">Display</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="currentCTR">Current CTR (if known)</Label>
                  <Input 
                    id="currentCTR" 
                    placeholder="e.g., 1.2%" 
                    value={formData.currentCTR}
                    onChange={(e) => updateFormField("currentCTR", e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">Optional: Helps calibrate our recommendations</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full" 
                onClick={handleGenerate}
                disabled={isGenerating || !formData.adTitle || !formData.valueProposition}
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate Optimized Ad Copy
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
          
          {/* Generated Ads */}
          {generatedAds.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Generated Ads</h3>
              <div className="space-y-4">
                {generatedAds.map((ad) => (
                  <Card key={ad.id} className={ad.isSaved ? "border-blue-400 shadow-sm" : ""}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-base">{ad.title}</CardTitle>
                          <CardDescription className="mt-1 text-sm">{ad.description}</CardDescription>
                        </div>
                        <Badge variant={ad.score >= 8 ? "default" : "outline"} className="ml-2">
                          Score: {ad.score}/10
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardFooter className="flex justify-between pt-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{ad.platform}</Badge>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 gap-1"
                          onClick={() => toggleSaved(ad.id)}
                        >
                          {ad.isSaved ? (
                            <>
                              <Bookmark className="h-4 w-4 fill-current" />
                              Saved
                            </>
                          ) : (
                            <>
                              <Bookmark className="h-4 w-4" />
                              Save
                            </>
                          )}
                        </Button>
                      </div>
                      <div className="flex items-center gap-1">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8"
                          onClick={() => copyToClipboard(`${ad.title}\n\n${ad.description}`)}
                        >
                          <ClipboardCopy className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 text-muted-foreground"
                          onClick={() => deleteAd(ad.id)}
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </TabsContent>
        
        {/* Copy Optimizer Tab */}
        <TabsContent value="optimizer" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle className="text-lg">Select Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button 
                    variant={activePlatform === "search" ? "default" : "outline"} 
                    className="w-full justify-start mb-2"
                    onClick={() => setActivePlatform("search")}
                  >
                    <Search className="mr-2 h-4 w-4" />
                    Search Ads
                  </Button>
                  <Button 
                    variant={activePlatform === "social" ? "default" : "outline"} 
                    className="w-full justify-start mb-2"
                    onClick={() => setActivePlatform("social")}
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Social Media Ads
                  </Button>
                  <Button 
                    variant={activePlatform === "display" ? "default" : "outline"} 
                    className="w-full justify-start"
                    onClick={() => setActivePlatform("display")}
                  >
                    <BarChart className="mr-2 h-4 w-4" />
                    Display Ads
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-amber-500" />
                  CTR Optimization Tips
                </CardTitle>
                <CardDescription>
                  {activePlatform === "search" && "Techniques to improve your search ad CTR"}
                  {activePlatform === "social" && "Strategies to boost your social media ad engagement"}
                  {activePlatform === "display" && "Design principles for higher-performing display ads"}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1">
                  {optimizationSuggestions[activePlatform as keyof typeof optimizationSuggestions].map((tip) => (
                    <Accordion type="single" collapsible key={tip.id}>
                      <AccordionItem value={`item-${tip.id}`} className="border-0">
                        <AccordionTrigger className="py-3 px-4 hover:bg-muted/50">
                          <div className="flex flex-1 items-center justify-between pr-2">
                            <div className="flex items-center gap-3">
                              <div className={
                                tip.impact === "High" 
                                  ? "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-400"
                                  : "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-400"
                              }>
                                <Star className="h-4 w-4 m-1" />
                              </div>
                              <span>{tip.title}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="ml-4">
                                {tip.impact} Impact
                              </Badge>
                              <Badge variant="outline">
                                {tip.difficulty}
                              </Badge>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pt-0 pb-3">
                          <div className="space-y-3">
                            <p className="text-muted-foreground">
                              {tip.description}
                            </p>
                            <div className="bg-muted/50 rounded-md p-3 space-y-2">
                              <div className="flex items-start