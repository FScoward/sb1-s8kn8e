import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';

interface AddStockFormProps {
  onAdd: (symbol: string, name: string) => void;
}

const AddStockForm: React.FC<AddStockFormProps> = ({ onAdd }) => {
  const [symbol, setSymbol] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (symbol && name) {
      onAdd(symbol, name);
      setSymbol('');
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-wrap -mx-2">
        <div className="w-full sm:w-1/2 px-2 mb-4 sm:mb-0">
          <label htmlFor="symbol" className="block text-sm font-medium text-gray-700 mb-1">
            銘柄コード
          </label>
          <input
            type="text"
            id="symbol"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="w-full sm:w-1/2 px-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            銘柄名
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <PlusCircle className="mr-2" size={18} />
          追加
        </button>
      </div>
    </form>
  );
};

export default AddStockForm;