import styles from './post-body.module.css'
import { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.min.css';

export default function PostBody({ content }) {
  
  useEffect(() => {
    Prism.highlightAll();
  }, [content])

  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
