package lim.saemyung.springbootdeveloper.service;

import lim.saemyung.springbootdeveloper.domain.Article;
import lim.saemyung.springbootdeveloper.dto.AddArticleRequest;
import lim.saemyung.springbootdeveloper.dto.UpdateArticleRequest;
import lim.saemyung.springbootdeveloper.repository.BlogRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BlogService {

    private final BlogRepository blogRepository;

    public Article save(AddArticleRequest req){
        return blogRepository.save(req.toEntity());
    }

    public List<Article> findAll(){
        return blogRepository.findAll();
    }

    public Article findById(long id){
        return blogRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("not found: " + id));
    }

    public void delete(long id){
        blogRepository.deleteById(id);
    }

    @Transactional
    public Article update(long id, UpdateArticleRequest req){
        Article article = blogRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("not found: " + id));
        article.update(req.getTitle(), req.getContent());
        return article;
    }

}
