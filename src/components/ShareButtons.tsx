import { useState } from "react";
import { Facebook, Twitter, Linkedin, MessageCircle, Copy, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ShareButtonsProps {
  url: string;
  title: string;
  excerpt: string;
  onShare?: (platform: string) => void;
}

const ShareButtons = ({ url, title, excerpt, onShare }: ShareButtonsProps) => {
  const [copiedChatGPT, setCopiedChatGPT] = useState(false);
  const [copiedClaude, setCopiedClaude] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedExcerpt = encodeURIComponent(excerpt);
  const encodedText = encodeURIComponent(`${title}\n\n${excerpt}`);

  const socialPlatforms = [
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      hoverColor: "hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]",
      ariaLabel: "Share on Facebook",
    },
    {
      name: "X",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      hoverColor: "hover:bg-[#000000] hover:text-white hover:border-[#000000]",
      ariaLabel: "Share on X (Twitter)",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      hoverColor: "hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]",
      ariaLabel: "Share on LinkedIn",
    },
    {
      name: "Reddit",
      icon: () => (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
        </svg>
      ),
      url: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
      hoverColor: "hover:bg-[#FF4500] hover:text-white hover:border-[#FF4500]",
      ariaLabel: "Share on Reddit",
    },
    {
      name: "Pinterest",
      icon: () => (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
        </svg>
      ),
      url: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedExcerpt}`,
      hoverColor: "hover:bg-[#E60023] hover:text-white hover:border-[#E60023]",
      ariaLabel: "Share on Pinterest",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
      hoverColor: "hover:bg-[#25D366] hover:text-white hover:border-[#25D366]",
      ariaLabel: "Share on WhatsApp",
      isWhatsApp: true,
    },
  ];

  const handleSocialShare = (platform: typeof socialPlatforms[0]) => {
    onShare?.(platform.name);
    
    if (platform.isWhatsApp) {
      // WhatsApp requires direct navigation to avoid CORS blocking
      window.location.href = platform.url;
    } else {
      window.open(platform.url, "_blank", "noopener,noreferrer,width=600,height=400");
    }
  };

  const copyAIPrompt = async (aiName: "ChatGPT" | "Claude") => {
    const prompt = `Please read and summarize this article for me, providing the key takeaways and main points:

Title: ${title}

Excerpt: ${excerpt}

Full Article URL: ${url}

Please provide:
1. A brief summary (2-3 sentences)
2. Key takeaways (bullet points)
3. Any notable insights or conclusions`;

    try {
      await navigator.clipboard.writeText(prompt);
      onShare?.(aiName);
      
      if (aiName === "ChatGPT") {
        setCopiedChatGPT(true);
        setTimeout(() => setCopiedChatGPT(false), 2000);
      } else {
        setCopiedClaude(true);
        setTimeout(() => setCopiedClaude(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="space-y-6">
      {/* Social Share Section */}
      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">
          Share this article
        </h4>
        <div className="flex flex-wrap gap-2">
          {socialPlatforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <Button
                key={platform.name}
                variant="outline"
                size="sm"
                onClick={() => handleSocialShare(platform)}
                aria-label={platform.ariaLabel}
                className={`border-border transition-all duration-200 ${platform.hoverColor}`}
              >
                <Icon />
                <span className="hidden sm:inline ml-1">{platform.name}</span>
              </Button>
            );
          })}
        </div>
      </div>

      {/* AI Share Section */}
      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">
          Discuss with AI
        </h4>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => copyAIPrompt("ChatGPT")}
            aria-label="Copy prompt for ChatGPT"
            className="border-border transition-all duration-200 hover:bg-[#10A37F] hover:text-white hover:border-[#10A37F]"
          >
            {copiedChatGPT ? (
              <>
                <Check className="w-4 h-4" />
                <span className="hidden sm:inline ml-1">Copied!</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span className="hidden sm:inline ml-1">Share to ChatGPT</span>
              </>
            )}
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => copyAIPrompt("Claude")}
            aria-label="Copy prompt for Claude"
            className="border-border transition-all duration-200 hover:bg-[#D97706] hover:text-white hover:border-[#D97706]"
          >
            {copiedClaude ? (
              <>
                <Check className="w-4 h-4" />
                <span className="hidden sm:inline ml-1">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span className="hidden sm:inline ml-1">Share to Claude</span>
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShareButtons;
