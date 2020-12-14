import React, { useEffect } from 'react';
import { DatabaseContext } from './contexts';
import useAuth from './useAuth';

type Assignment = {
  filename: string;
  subject: string;
  grade: number;
};

const useAssignments = () => {
  const [{ user }] = useAuth();
  const database = React.useContext(DatabaseContext);

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [data, setData] = React.useState<Assignment[]>([]);

  const getAssignments = async () => {
    const userId = user.user.uid;
    try {
      setLoading(true);
      const assignmentsRef = await database.ref('/assignments/' + userId);

      assignmentsRef.on('value', (snapshot) => {
        const value = snapshot.val();
        setData(value);
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    if (user) getAssignments();
    if (!user && data) setData(null);
  }, [user]);

  return { loading, error, data };
};

export default useAssignments;
