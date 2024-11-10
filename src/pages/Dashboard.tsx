import { VpIcons } from '../utils/VpIcons';

import Button from '../components/Button';
import { useEffect, useState } from 'react';
import { api } from '../service/mockApi';
import { Department } from '../service/types';
import Spinner from '../components/Spinner';
const Dashboard = () => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await api.getDepartments();
        setDepartments(response.data);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setLoading(false);
      }
    };

    fetchDepartments();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }
  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-[1.5313rem]">
        {departments.map((dept) => (
          <div
            key={dept.id}
            className="rounded-3xl py-4 px-[0.9375rem] pt-4 pb-[1.5rem]"
            style={{ backgroundColor: dept.backgroundColor }}
          >
            <p
              className="mb-4 rounded-xl py-4 px-3"
              style={{ backgroundColor: dept.messageBackground }}
            >
              {dept.message}
            </p>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">{dept.name}</h3>
                <p className="text-sm flex items-center gap-1.5">
                  {dept.stats.departments} Department
                  <span>{VpIcons['ellipse']('4')}</span> {dept.stats.units} Unit
                </p>
              </div>
              <div className="w-8 h-8 bg-blue-200 rounded-full overflow-hidden">
                <img src={dept.avatar} alt={dept.name} />
              </div>
            </div>
          </div>
        ))}
        <div className="rounded-2xl py-4 px-[0.9375rem] bg-schemes-surface-container-low flex gap-6 flex-col">
          <div>
            <div className="bg-schemes-primary h-[5.5rem] w-[5.5rem] rounded-full border-8 border-white grid place-items-center mx-auto">
              {VpIcons['add']()}
            </div>
          </div>
          <Button className="bg-white mt-auto">
            {VpIcons['create']()}
            <span>Create a department</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
