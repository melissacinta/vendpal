import { VpIcons } from '../utils/VpIcons';
import Button from '../components/Button';
import Card from '../components/Card';
import { useState } from 'react';
import { classNames } from '../utils';
import DateInput from '../components/DateInput';
const budgetTabs = [
  'Currency and Taxes',
  ' Budget line',
  'Budget room centre',
  'Budget control',
];
const BudgetRoom = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <>
      {/* Main Content */}
      <div className="col-span-9">
        {/* Tabs */}
        <div className="border-b border-schemes-outline px-[1.5313rem] text-lg font-medium">
          <div className="flex space-x-4 lg:space-x-8 w-full overflow-auto no-scrollbar">
            {budgetTabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(i)}
                className={classNames(
                  selectedTab === i
                    ? 'border-palettes-neutral-15'
                    : 'border-transparent',
                  'border-b-2 py-2 transition-all duration-300 ease-linear flex-shrink-0 flex group'
                )}
              >
                <span className="block hover:bg-schemes-surface-container h-full py-2 px-4 rounded-xl transition-all duration-300 ease-linear">
                  {tab}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Financial Year Section */}
        <div className="mb-8 py-4 border-b border-schemes-outline px-[1.5313rem]">
          <div className="flex sm:items-center max-sm:flex-col gap-8">
            <span className="text-xl font-medium">Financial year</span>
            <div className="flex items-center space-x-4 text-lg">
              <DateInput prefix="Start" />
              <DateInput prefix="End" />
            </div>
          </div>
        </div>

        {/* Currency and Conversion Sections */}
        <div className="grid md:grid-cols-2 gap-8 px-[1.5313rem]">
          {/* Currency Section */}
          <Card className="py-6">
            <h3 className="font-medium mb-6 border-b border-schemes-outline px-6 pb-6">
              Currency
            </h3>
            <div className="space-y-6 px-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span>Principal Currency</span>
                  <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">
                    Basic User
                  </span>
                </div>
                <div className="bg-gray-100 p-3 rounded flex items-center space-x-2">
                  {VpIcons['ngFlag']()}
                  <span>NGA</span>
                  <span className="ml-2">Naira</span>
                </div>
              </div>

              <div>
                <h4 className="mb-4">Tax type</h4>
                <div className="bg-gray-100 p-3 rounded">
                  Value Added Tax (VAT)
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="mb-4">Tax rate</h4>
                  <div className="bg-gray-100 p-3 rounded">Fixed amount</div>
                </div>
                <div>
                  <h4 className="mb-4">Tax rate unit</h4>
                  <div className="bg-gray-100 p-3 rounded">30.00</div>
                </div>
              </div>
              {/* Edit Button */}
              <Button variant="primary">
                {VpIcons['create']()}
                <span>Edit overview</span>
              </Button>
            </div>
          </Card>

          {/* Conversion Rate Section */}
          <div className="space-y-6">
            <Card className="pb-6">
              <h3 className="font-medium mb-6 border-b border-schemes-outline p-6">
                Conversion rate
              </h3>

              <div className="space-y-4  px-6">
                <div className="bg-gray-100 p-3 rounded flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {VpIcons['ngFlag']()}
                    <span>NGA</span>
                  </div>
                  <span>100,000</span>
                </div>

                <div className="bg-gray-100 p-3 rounded flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {VpIcons['usFlag']()}
                    <span>USA</span>
                  </div>
                  <span>60.8142</span>
                </div>
              </div>
            </Card>

            <Card className="bg-red-50 text-red-600 p-4" noBorder>
              You cannot change the Principal Currency once the financial year
              has commenced
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default BudgetRoom;
