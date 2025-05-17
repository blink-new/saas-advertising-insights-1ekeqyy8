import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { ScrollArea } from './components/ui/scroll-area';
import { 
  BarChart, 
  Route as RouteIcon, 
  PieChart, 
  Settings, 
  Users, 
  Mail, 
  MessageSquare, 
  LogOut, 
  Menu,
  X,
  ChevronRight
} from 'lucide-react';

// Import pages
import ChannelGuides from './pages/ChannelGuides';
import CTROptimizer from './pages/CTROptimizer';

// Import hook for detecting mobile view
import { useIsMobile } from './hooks/use-mobile';

// Dashboard component
const Dashboard = () => {
  return (
    <div className="animate-fade-in">
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">SaaS Advertising Insights</h1>
        <p className="text-muted-foreground">
          Welcome to your advertising optimization platform. Explore strategies, tools, and insights to improve your SaaS marketing.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="col-span-2">
          <CardContent className="p-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold mb-4">Performance Overview</h2>
              <div className="h-[300px] w-full flex items-center justify-center text-muted-foreground border-2 border-dashed rounded-lg">
                Performance charts will appear here
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold mb-4">Quick Stats</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-muted-foreground">Average CTR</span>
                    <span className="text-sm font-medium">3.2%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-muted-foreground">Conversion Rate</span>
                    <span className="text-sm font-medium">2.8%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '53%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-muted-foreground">Campaign Efficiency</span>
                    <span className="text-sm font-medium">78%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link to="/channel-guides" className="block">
          <Card className="h-full hover:bg-muted/50 transition-colors cursor-pointer">
            <CardContent className="p-6 flex flex-col h-full">
              <RouteIcon className="h-8 w-8 text-blue-500 mb-4" />
              <h3 className="text-lg font-medium mb-2">Channel Guides</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Detailed walkthroughs for optimizing each marketing channel.
              </p>
              <div className="mt-auto">
                <Button variant="outline" className="w-full justify-between">
                  Explore Channels
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </Link>
        
        <Link to="/ctr-optimizer" className="block">
          <Card className="h-full hover:bg-muted/50 transition-colors cursor-pointer">
            <CardContent className="p-6 flex flex-col h-full">
              <BarChart className="h-8 w-8 text-green-500 mb-4" />
              <h3 className="text-lg font-medium mb-2">CTR Optimizer</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Create and test ad copy to maximize click-through rates.
              </p>
              <div className="mt-auto">
                <Button variant="outline" className="w-full justify-between">
                  Generate Ads
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </Link>
        
        <Card className="h-full hover:bg-muted/50 transition-colors cursor-pointer">
          <CardContent className="p-6 flex flex-col h-full">
            <PieChart className="h-8 w-8 text-purple-500 mb-4" />
            <h3 className="text-lg font-medium mb-2">Strategy Hub</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Proven marketing strategies for SaaS products.
            </p>
            <div className="mt-auto">
              <Button variant="outline" className="w-full justify-between">
                View Strategies
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="h-full hover:bg-muted/50 transition-colors cursor-pointer">
          <CardContent className="p-6 flex flex-col h-full">
            <Settings className="h-8 w-8 text-amber-500 mb-4" />
            <h3 className="text-lg font-medium mb-2">Resource Library</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Templates, guides, and tools to enhance your campaigns.
            </p>
            <div className="mt-auto">
              <Button variant="outline" className="w-full justify-between">
                Browse Resources
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Sidebar component
const Sidebar = ({ isMobile, isOpen, setIsOpen }: { isMobile: boolean, isOpen: boolean, setIsOpen: (open: boolean) => void }) => {
  const location = useLocation();
  
  const routes = [
    { path: '/', label: 'Dashboard', icon: <BarChart className="h-5 w-5" /> },
    { path: '/channel-guides', label: 'Channel Guides', icon: <RouteIcon className="h-5 w-5" /> },
    { path: '/ctr-optimizer', label: 'CTR Optimizer', icon: <PieChart className="h-5 w-5" /> },
    { path: '/strategy', label: 'Strategy Hub', icon: <Users className="h-5 w-5" /> },
    { path: '/resources', label: 'Resource Library', icon: <Settings className="h-5 w-5" /> },
  ];
  
  const mobileSidebar = (
    <div className={`fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all ${isOpen ? 'visible' : 'invisible'}`}>
      <div className={`fixed inset-y-0 left-0 z-50 w-3/4 max-w-xs bg-sidebar-background border-r border-sidebar-border p-6 shadow-lg transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-lg font-semibold text-sidebar-foreground">SaasBoost</h2>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <ScrollArea className="h-[calc(100vh-8rem)]">
          <div className="space-y-1 py-2">
            {routes.map((route) => (
              <Link 
                key={route.path} 
                to={route.path}
                onClick={() => setIsOpen(false)}
              >
                <Button
                  variant={location.pathname === route.path ? 'secondary' : 'ghost'}
                  className="w-full justify-start gap-3"
                >
                  {route.icon}
                  <span>{route.label}</span>
                </Button>
              </Link>
            ))}
          </div>
        </ScrollArea>
        
        <div className="absolute bottom-6 left-6 right-6">
          <Button variant="outline" className="w-full justify-start gap-3">
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </Button>
        </div>
      </div>
    </div>
  );
  
  const desktopSidebar = (
    <div className="hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 w-64 bg-sidebar-background border-r border-sidebar-border">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-sidebar-foreground mb-8">SaasBoost</h2>
        <ScrollArea className="h-[calc(100vh-12rem)]">
          <div className="space-y-1 py-2">
            {routes.map((route) => (
              <Link key={route.path} to={route.path}>
                <Button
                  variant={location.pathname === route.path ? 'secondary' : 'ghost'}
                  className="w-full justify-start gap-3"
                >
                  {route.icon}
                  <span>{route.label}</span>
                </Button>
              </Link>
            ))}
          </div>
        </ScrollArea>
      </div>
      
      <div className="mt-auto p-6">
        <Button variant="outline" className="w-full justify-start gap-3">
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </Button>
      </div>
    </div>
  );
  
  return (
    <>
      {isMobile ? mobileSidebar : desktopSidebar}
    </>
  );
};

// Main layout
const Layout = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div className="min-h-screen flex">
      <Sidebar isMobile={isMobile} isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <div className="flex-1 lg:pl-64">
        <header className="sticky top-0 z-30 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
          <div className="container flex h-14 items-center">
            {isMobile && (
              <Button 
                variant="ghost" 
                size="icon" 
                className="mr-2" 
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            )}
            <span className="font-medium">Advertising Insights Platform</span>
          </div>
        </header>
        
        <main className="container py-6">
          {children}
        </main>
      </div>
    </div>
  );
};

// App component
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout>
            <Dashboard />
          </Layout>
        } />
        <Route path="/channel-guides" element={
          <Layout>
            <ChannelGuides />
          </Layout>
        } />
        <Route path="/ctr-optimizer" element={
          <Layout>
            <CTROptimizer />
          </Layout>
        } />
        <Route path="*" element={
          <Layout>
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
              <h1 className="text-3xl font-bold">Page Not Found</h1>
              <p className="text-muted-foreground mt-2">The page you're looking for doesn't exist or has been moved.</p>
              <Link to="/">
                <Button className="mt-6">Go back to Dashboard</Button>
              </Link>
            </div>
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;