// Define the TypeScript interfaces for strong typing
export interface ComponentSpec {
  name: string;
  role: string;
  interface: string;
}

export interface StageRoadmap {
  stage_number: number;
  name: string;
  focus: string;
  status: string;
  brief: string;
}

export interface CurrentOffering {
  title: string;
  subtitle: string;
  highlights: string[];
  hardware_specifications: {
    microcontroller: string;
    power_requirements: string;
    component_list: ComponentSpec[];
  };
  user_interface_features: {
    feature_name: string;
    description: string;
    examples: { input: string; suggestion: string }[];
    data_access: string;
  };
}

export interface ProductData {
  product: {
    id: string;
    status: string;
    title: string;
    headline: string;
    description: string;
    saas_category: string;
  };
  pricing: {
    tier: string;
    stage_included: number;
  };
  stages_roadmap: StageRoadmap[];
  current_offering_stage1: CurrentOffering;
}

// The core product data object
export const ANKURAN_PRODUCT_DATA: ProductData = {
  product: {
    id: "ankuran_hydro_system",
    status: "Ready for Launch (Stage 1)",
    title: "Ankuran: Intelligent Hydroponics Automation and Monitoring System",
    headline: "Unlock Smarter Growth with Progressive Hydroponics Automation",
    description: "Ankuran is a cutting-edge, three-stage progressive platform developed under the Bhooyam initiative. It scales intelligence from fundamental climate control to advanced AI-driven nutrient management and growth analysis, providing growers with unparalleled precision.",
    saas_category: "Smart Farming / Agri-Tech",
  },
  pricing: {
    tier: "Standard",
    stage_included: 1,
  },
  stages_roadmap: [
    {
      stage_number: 1,
      name: "Ankuran: Jal",
      focus: "Essential Environmental Control",
      status: "Available",
      brief: "Core system for real-time monitoring, automation of water/air flow, and intelligent user guidance.",
    },
    {
      stage_number: 2,
      name: "Advanced Nutrient Management",
      focus: "Precision pH/EC Dosing",
      status: "Roadmap",
      brief: "Integrates pH and EC sensors for automatic, precise nutrient solution adjustment.",
    },
    {
      stage_number: 3,
      name: "AI Growth Optimizer",
      focus: "Predictive & Vision-Based Control",
      status: "Roadmap",
      brief: "Uses AI for predictive maintenance, yield forecasting, and image-based growth analysis.",
    },
  ],
  current_offering_stage1: {
    title: "Stage 1: Ankuran – Jal",
    subtitle: "The Foundational Monitoring & Control System",
    highlights: [
      "Intelligent Suggestions over Raw Data",
      "Automated Climate-Based Water/Air Control",
      "Real-Time Web Dashboard Access",
    ],
    hardware_specifications: {
      microcontroller: "ESP32 WROOM-32 (30-pin module)",
      power_requirements: "Regulated 5 V supply (Common Ground)",
      component_list: [
        { name: "DHT22 Sensor", role: "Temperature & Humidity", interface: "Digital (GPIO 4)" },
        { name: "Sunlight Sensor", role: "Light Intensity", interface: "I²C (SDA 21, SCL 22)" },
        { name: "5V Relay 1", role: "Water Pump Control", interface: "Digital Output (GPIO 26)" },
        { name: "5V Relay 2", role: "Air Pump Control", interface: "Digital Output (GPIO 27)" },
      ],
    },
    user_interface_features: {
      feature_name: "Intelligent Guidance System",
      description: "The system replaces complex numerical readings with simple, actionable advice.",
      examples: [
        {
          input: "Low Sunlight",
          suggestion: "Sunlight levels are low — consider moving the system to a brighter area.",
        },
        {
          input: "High Temperature",
          suggestion: "Temperature is high — increase ventilation or reduce light exposure.",
        },
      ],
      data_access:
        "Numerical data is available for advanced users on the dashboard, but suggestions are prioritized.",
    },
  },
};