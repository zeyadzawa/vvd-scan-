import Accordion from './Accordion';
import Features from './Features';
import Heading from './Heading';

function Help() {
  return (
    <div className="mx-auto max-w-7xl bg-gray-50 p-6">
      {/* Page Title */}
			<div className="text-center">
				<Heading>Help page</Heading>
        <p className="mt-2 text-lg text-gray-600">
          Quick guide to help you use our virus scanning, directory scanning,
          and vulnerability assessment tools effectively.
        </p>
      </div>
      {/* Introduction */}
      <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">
          Introduction
        </h2>
        <p className="text-gray-700">
          Welcome to our platform! We provide tools for{' '}
          <strong>virus scanning</strong>, <strong>directory scanning</strong>,
          and <strong>vulnerability assessment</strong> for URLs. Here's how to
          use each feature.
        </p>
      </div>
      <Features />
      <Accordion />
    </div>
  );
}

export default Help;
