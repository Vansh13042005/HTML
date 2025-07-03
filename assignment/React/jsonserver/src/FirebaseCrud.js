// src/FirebaseCrud.js
import React, { useState, useEffect } from 'react';
import { 
  auth, 
  provider, 
  signInWithPopup, 
  signOut,
  db,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc
} from './firebase';

function FirebaseCrud() {
  const [user, setUser] = useState(null);
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      setError(error.message);
    }
  };

  const fetchItems = async () => {
    if (!user) return;
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, 'users', user.uid, 'items'));
      const itemsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setItems(itemsData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const addItem = async () => {
    if (!user || !itemName.trim()) return;
    try {
      setLoading(true);
      await addDoc(collection(db, 'users', user.uid, 'items'), {
        name: itemName,
        createdAt: new Date().toISOString()
      });
      setItemName('');
      await fetchItems();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteItem = async (id) => {
    if (!user) return;
    try {
      setLoading(true);
      await deleteDoc(doc(db, 'users', user.uid, 'items', id));
      await fetchItems();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
      if (user) fetchItems();
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      {user ? (
        <>
          <h2>Welcome, {user.displayName || 'User'}!</h2>
          <button onClick={handleSignOut}>Sign Out</button>
          
          <div style={{ margin: '20px 0' }}>
            <input
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              placeholder="Enter item name"
              style={{ padding: '8px', marginRight: '10px' }}
            />
            <button onClick={addItem}>Add Item</button>
          </div>

          <h3>Your Items:</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {items.map(item => (
              <li key={item.id} style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '10px',
                borderBottom: '1px solid #eee'
              }}>
                <span>{item.name}</span>
                <button 
                  onClick={() => deleteItem(item.id)}
                  style={{ 
                    backgroundColor: '#ff4444',
                    color: 'white',
                    border: 'none',
                    padding: '5px 10px',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <h2>Please Sign In</h2>
          <button 
            onClick={handleGoogleSignIn}
            style={{
              backgroundColor: '#4285F4',
              color: 'white',
              padding: '10px 15px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Sign In with Google
          </button>
        </>
      )}
    </div>
  );
}

export default FirebaseCrud;