import React from 'react';
import { Link } from 'react-router-dom';
import {
  Globe,
  Smartphone,
  Layers,
  LayoutDashboard,
  Flame,
  Cpu,
  Search,
  MousePointerClick,
  CheckCircle2,
  RefreshCw,
  ArrowRight
} from 'lucide-react';

const iconMap = {
  Globe,
  Smartphone,
  Layers,
  LayoutDashboard,
  Flame,
  Cpu,
  Search,
  MousePointerClick,
  CheckCircle2,
  RefreshCw,
};

export default function ServiceCard({ service }) {
  const IconComponent = iconMap[service.icon] || Globe;

  return (
    <div className="service-card">
      <div>
        {/* Top Icon & Category */}
        <div className="service-card-top">
          <div className="service-icon-box">
            <IconComponent style={{ width: '24px', height: '24px' }} />
          </div>
          <span className="service-cat-pill">
            {service.category || 'Design'}
          </span>
        </div>

        {/* Title */}
        <h3 className="service-title">
          {service.name}
        </h3>

        {/* Short Description */}
        <p className="service-desc">
          {service.shortDesc}
        </p>

        {/* Deliverables snippet */}
        {service.deliverables && (
          <div className="deliverables-preview">
            {service.deliverables.slice(0, 2).map((item, idx) => (
              <div key={idx} className="deliverable-bullet">
                <span className="bullet-dot" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Learn More link */}
      <div>
        <Link
          to={`/services#${service.id}`}
          className="learn-more-link"
        >
          <span>Learn More</span>
          <ArrowRight style={{ width: '16px', height: '16px' }} />
        </Link>
      </div>
    </div>
  );
}
