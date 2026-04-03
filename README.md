# Chemical Industry Portal

A comprehensive digital platform that integrates chemical, market, trade, logistics, regulatory, and strategic intelligence for informed business decision-making.

## Features

### 9 Main Modules

1. **Home Dashboard** - Overview of key metrics and recent activity
2. **Chemical Master Directory** - Comprehensive database of chemical compounds
3. **Market Intelligence** - Real-time market trends, pricing, and forecasting
4. **Trade Intelligence** - Global trade flows and import/export analytics
5. **Supply Chain & Logistics** - Shipment tracking and supplier management
6. **Compliance & Regulations** - Regulatory compliance and certification tracking
7. **Analytics & Insights** - Advanced analytics and business intelligence
8. **Reports & Downloads** - Custom report generation and scheduling
9. **User & Access Management** - User roles, permissions, and access control

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **UI**: Modern, responsive design

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
CIP/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx            # Home Dashboard
│   │   ├── chemical-master/    # Chemical Master module
│   │   ├── market-intelligence/# Market Intelligence module
│   │   ├── trade-intelligence/ # Trade Intelligence module
│   │   ├── supply-chain/       # Supply Chain module
│   │   ├── compliance/         # Compliance module
│   │   ├── analytics/          # Analytics module
│   │   ├── reports/            # Reports module
│   │   └── user-management/    # User Management module
│   └── components/             # Reusable React components
│       ├── Sidebar.tsx         # Navigation sidebar
│       ├── Header.tsx          # Top header
│       ├── dashboard/          # Dashboard components
│       ├── chemical-master/    # Chemical Master components
│       ├── market-intelligence/# Market Intelligence components
│       ├── trade-intelligence/ # Trade Intelligence components
│       ├── supply-chain/       # Supply Chain components
│       ├── compliance/         # Compliance components
│       ├── analytics/          # Analytics components
│       ├── reports/            # Reports components
│       └── user-management/    # User Management components
├── public/                     # Static assets
├── tailwind.config.ts          # Tailwind configuration
├── next.config.ts              # Next.js configuration
└── package.json                # Dependencies

## Features by Module

### Dashboard
- Quick stats overview
- Activity metrics
- Market trends
- Recent activity feed

### Chemical Master Directory
- Searchable chemical database
- CAS number lookup
- Category and application filters
- Chemical properties display

### Market Intelligence
- Regional market overview
- Price analytics
- Demand forecasting
- Market trends visualization

### Trade Intelligence
- Global trade flow maps
- Import/export data
- Top trade partners
- Volume and value metrics

### Supply Chain & Logistics
- Logistics overview
- Real-time shipment tracking
- Supplier network management
- ETA and status updates

### Compliance & Regulations
- Compliance status dashboard
- Regulatory updates feed
- Certification tracking
- Expiry date monitoring

### Analytics & Insights
- Analytics dashboard
- Data visualization tools
- Business insights
- Predictive analytics

### Reports & Downloads
- Custom report generator
- Report library
- Scheduled reports
- Multiple export formats

### User & Access Management
- User management
- Role-based permissions
- Access logs
- Activity monitoring

## License

Proprietary - All rights reserved

## Support

For support and inquiries, please contact your system administrator.
