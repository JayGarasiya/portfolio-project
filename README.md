const InsuranceManagementCaseStudy = {

  title: "Insurance Management System",

  subtitle:
    "ASP.NET Core MVC & Web API Based Insurance Management Platform",

  category: "College Project",

  duration: "Academic Project",

  technologies: [

    "ASP.NET Core MVC",
    "ASP.NET Core Web API",
    ".NET 8",
    "SQL Server",
    "Dapper",
    "JWT Authentication",
    "FluentValidation",
    "Bootstrap",
    "jQuery",
    "Razor Views"

  ],

  image:
    "/images/insurance-management-banner.jpg",

  overview:

`Insurance Management System is a complete web-based insurance platform developed using ASP.NET Core MVC and ASP.NET Core Web API.

The system helps manage customers, insurance policies, policy plans, claims, and authentication processes securely using JWT Authentication.

The project follows clean architecture principles and demonstrates secure backend API development, Dapper integration, SQL Server database management, and responsive frontend implementation using Razor Views and Bootstrap.`,

  objectives: [

    "Build secure insurance management workflows",
    "Implement JWT Authentication system",
    "Manage customers and policy plans",
    "Handle policy claims and verification",
    "Develop scalable RESTful APIs",
    "Integrate SQL Server using Dapper"

  ],

  features: [

    {

      title: "Authentication & Security",

      points: [

        "JWT Authentication",
        "User Registration",
        "Secure Login System",
        "Token-Based Authorization",
        "Email Verification",
        "Protected Routes"

      ]

    },

    {

      title: "Customer Management",

      points: [

        "Add Customers",
        "Update Customer Information",
        "Delete Customer Records",
        "Customer Search",
        "Customer Detail Management"

      ]

    },

    {

      title: "Insurance Policy Management",

      points: [

        "Create Insurance Policies",
        "Policy Verification",
        "Update Policies",
        "Policy Status Management",
        "Claim Handling"

      ]

    },

    {

      title: "Policy Plan Management",

      points: [

        "Add Policy Plans",
        "Update Existing Plans",
        "View Available Plans",
        "Plan Configuration"

      ]

    },

    {

      title: "Dashboard & Analytics",

      points: [

        "Total Customers Overview",
        "Policy Statistics",
        "Dashboard Summaries",
        "Quick Insights"

      ]

    },

    {

      title: "Email Service",

      points: [

        "Verification Emails",
        "Policy Notifications",
        "Customer Communication",
        "Automated Email Handling"

      ]

    }

  ],

  architecture: {

    title: "System Architecture",

    description:

`The Insurance Management System follows a layered architecture where the frontend MVC application communicates with backend Web APIs.

The APIs handle authentication, policy management, customer operations, and claim processing while Dapper manages SQL Server database interactions efficiently.`,

    flow: [

      "ASP.NET MVC Frontend",
      "Controllers",
      "Service Layer",
      "ASP.NET Core Web APIs",
      "Dapper Data Access",
      "SQL Server Database"

    ]

  },

  folderStructure:

`InsuranceManagement/
│
├── InsuranceManagement.API
│   ├── Controllers/
│   ├── Services/
│   ├── Repositories/
│   ├── Middleware/
│   ├── Validators/
│   ├── Models/
│   └── Program.cs
│
├── InsuranceManagement.Web
│   ├── Controllers/
│   ├── Views/
│   ├── wwwroot/
│   └── ViewModels/
│
├── Insurance_DB
│
└── InsuranceManagement.sln`,

  modules: [

    {

      name: "Authentication Module",

      details: [

        "JWT Token Generation",
        "Login & Registration",
        "Email Verification",
        "Authorization Middleware"

      ]

    },

    {

      name: "Customer Module",

      details: [

        "CRUD Operations",
        "Customer Search",
        "Policy Assignment",
        "Customer Information Tracking"

      ]

    },

    {

      name: "Policy Module",

      details: [

        "Policy Creation",
        "Policy Verification",
        "Claim Processing",
        "Policy Status Handling"

      ]

    },

    {

      name: "Dashboard Module",

      details: [

        "Policy Overview",
        "Customer Statistics",
        "Quick Reports",
        "Analytics Summary"

      ]

    }

  ],

  databaseTables: [

    {

      table: "Users",

      columns: [

        "Id",
        "Name",
        "Email",
        "PasswordHash",
        "Role",
        "CreatedDate"

      ]

    },

    {

      table: "Customers",

      columns: [

        "CustomerId",
        "CustomerName",
        "Email",
        "Phone",
        "Address"

      ]

    },

    {

      table: "Policies",

      columns: [

        "PolicyId",
        "PolicyName",
        "PolicyAmount",
        "CustomerId",
        "Status"

      ]

    },

    {

      table: "PolicyPlans",

      columns: [

        "PlanId",
        "PlanName",
        "Duration",
        "PremiumAmount"

      ]

    },

    {

      table: "Claims",

      columns: [

        "ClaimId",
        "PolicyId",
        "ClaimStatus",
        "ClaimAmount"

      ]

    }

  ],

  workflowText:

`User Authentication
        ↓
JWT Token Generation
        ↓
Customer Management
        ↓
Policy Creation & Assignment
        ↓
Policy Verification
        ↓
Claim Processing
        ↓
Dashboard Reporting`,

  apiFlow:

`Frontend MVC Application
          ↓
ASP.NET Core Controllers
          ↓
Service Layer
          ↓
Dapper Repository Layer
          ↓
SQL Server Database`,

  securityFeatures: [

    "JWT Token Authentication",
    "Role-Based Authorization",
    "Email Verification",
    "Protected APIs",
    "Secure Password Handling",
    "Middleware Security"

  ],

  validationFeatures: [

    "FluentValidation",
    "API Request Validation",
    "Form Validation",
    "Error Handling",
    "Input Sanitization"

  ],

  uiFeatures: [

    "Responsive Bootstrap UI",
    "Razor View Rendering",
    "Dashboard Layout",
    "Modern Form Design",
    "Dynamic Data Tables"

  ],

  challenges: [

    {

      title: "JWT Authentication Integration",

      solution:

        "Implemented token-based authorization with middleware validation and protected APIs."

    },

    {

      title: "Efficient Database Queries",

      solution:

        "Used Dapper ORM for lightweight and high-performance SQL operations."

    },

    {

      title: "API Validation Handling",

      solution:

        "Implemented FluentValidation for secure and clean request validation."

    }

  ],

  futureImprovements: [

    "Payment Gateway Integration",
    "PDF Policy Reports",
    "SMS Notifications",
    "Cloud Deployment",
    "Admin Analytics Dashboard",
    "Customer Mobile Application",
    "Docker Support"

  ],

  conclusion:

`Insurance Management System successfully demonstrates enterprise-level ASP.NET Core application development with secure authentication, policy handling, customer management, Dapper integration, and responsive frontend architecture.

The project improved backend API development skills, SQL Server database handling, JWT security implementation, and clean architecture practices.`

}

export default InsuranceManagementCaseStudy
